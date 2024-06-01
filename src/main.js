const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const createTray = require("./tray");
const { settings } = require("./config");
const fs = require("fs");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    frame: settings.useframe,
    icon: path.join(__dirname, "assets", "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "load.js"),
      contextIsolation: settings.contextIsolation,
    },
  });

  mainWindow.loadURL("https://www.notion.so/");

  settings.devconsole && mainWindow.webContents.openDevTools();

  mainWindow.on("close", (event) => {
    event.preventDefault();
    mainWindow.hide();
  });
};

app.whenReady().then(() => {
  createWindow();
  createTray(mainWindow, createWindow);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Listers
ipcMain.on("window-minimize", () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});

ipcMain.on("window-maximize", () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on("window-close", () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

// Read the custom CSS file and inject on web page
const customCssPath = path.join(
  app.getPath("userData"),
  "themes",
  `${settings.Theme}.css`
);
fs.readFile(customCssPath, "utf8", (err, data) => {
  if (err) {
    console.error("Failed to read custom CSS file:", err);
    return;
  }
  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.webContents.insertCSS(data);
  });
});
