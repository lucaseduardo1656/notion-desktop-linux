# Notion Desktop App for Linux

Note: This is an unofficial project and is not affiliated with or endorsed by Notion Labs Inc.

## Overview

Welcome to the Notion Desktop App for Linux! This application wraps the web version of Notion in a sleek and efficient Electron-based desktop application, providing a native-like experience for Linux users. Enjoy all the features of Notion with the convenience of a dedicated desktop app.

## Features

- **Native Window Controls:** Customize the app window with native frame and control options.
- **Tray Integration:** Minimize the app to the system tray and restore it quickly.
- **Dev Tools:** Toggle the developer console for debugging purposes.
- **Auto-Hide Menu Bar:** Keep your workspace clutter-free with an auto-hiding menu bar.
- **Customizable Settings:** Easily change app settings custom themes and frame usage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lucaseduardo1656/notion-desktop-linux.git
   cd notion-desktop-linux
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

## Configuration

The application uses a `settings.json` file for configuration, stored in the user's data directory. By default, the following settings are provided:

```json
{
  "Theme": "linux", //linux , mac
  "devconsole": false,
  "contextIsolation": true,
  "useframe": false
}
```

You can manually edit this file to change the settings as needed. The file is located at:
`~/.config/Notion Desktop App/settings.json`

## Usage

- **Toggle Developer Tools:** Press `Ctrl+Shift+I` to open or close the developer console.
- **Tray Actions:** Right-click the tray icon to open the context menu for additional options.

## Development

### Project Structure

- **src/main.js:** The main entry point of the application.
- **src/config.js:** Configuration management, including verifying and loading settings.
- **src/tray.js:** Tray setup and management.
- **src/load.js:** Preload script for Electron's webPreferences.

### Scripts

- **start:** Runs the application.
- **package:** Packages the application for distribution.

### Packaging

To package the application for distribution, use the following command:

```bash
npm run package
```

This will create a distributable version of the app in the `dist` folder.

## Contributing

We welcome contributions! If you have any ideas, suggestions, or issues, please feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## Acknowledgments

- [Electron](https://www.electronjs.org/)
- [Notion](https://www.notion.so/product)

Enjoy using the Notion Desktop App for Linux!

---
