const { app, BrowserWindow } = require("electron")
app.on("ready", () => new BrowserWindow({ title: "Cache Test" }).loadURL("https://tricko.pro"))