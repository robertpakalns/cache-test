const { app, BrowserWindow } = require("electron")
app.on("ready", () => new BrowserWindow().loadURL("https://tricko.pro"))