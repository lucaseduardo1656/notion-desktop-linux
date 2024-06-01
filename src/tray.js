const { Tray, Menu, shell } = require("electron");
const path = require("path");

const createTray = (mainWindow, createWindow) => {
  tray = new Tray(path.join(__dirname, "assets", "icon.png"));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Open",
      click: () => {
        if (mainWindow) {
          mainWindow.isVisible() ? mainWindow.focus() : mainWindow.show();
        } else {
          createWindow();
        }
      },
    },
    {
      label: "About",
      click: () => {
        shell.openExternal(
          "https://github.com/lucaseduardo1656/notion-desktop-linux"
        );
      },
    },
    {
      label: "Close",
      click: () => {
        if (mainWindow) {
          mainWindow.destroy();
        }
      },
    },
  ]);

  tray.setToolTip("Notion");
  tray.setContextMenu(contextMenu);

  tray.on("click", () => {
    if (mainWindow) {
      mainWindow.isVisible() ? mainWindow.focus() : mainWindow.show();
    } else {
      createWindow();
    }
  });
};

module.exports = createTray;
