const path = require("path");
const fs = require("fs");
const { app } = require("electron");

const settingsFile = path.join(app.getPath("userData"), "settings.json");
const themesDir = path.join(app.getPath("userData"), "themes");
const srcThemesDir = path.join(__dirname, "themes");

const verifySettings = () => {
  if (!fs.existsSync(settingsFile)) {
    fs.writeFileSync(
      settingsFile,
      JSON.stringify(
        {
          Theme: "linux",
          devconsole: false,
          contextIsolation: true,
          useframe: false,
        },
        null,
        4
      )
    );
  }

  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir);
  }
  const files = fs.readdirSync(srcThemesDir);
  files.forEach((file) => {
    const srcFile = path.join(srcThemesDir, file);
    const destFile = path.join(themesDir, file);
    fs.copyFileSync(srcFile, destFile);
  });
};

verifySettings();

const settings = require(settingsFile);

module.exports = {
  settings: settings,
  verifySettings: verifySettings,
};
