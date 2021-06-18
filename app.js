const { app, BrowserWindow } = require("electron")

function createWindow() {
    let win = new BrowserWindow({
        title: "Osu!Stream updater",
        skipTaskbar: true,
        transparent: true,
        width: 1,
        height: 1,
        frame: false,
        webPreferences: {
            allowRunningInsecureContent: true,
            nodeIntegrationInSubFrames: true,
            nodeIntegrationInWorker: true,
            nodeIntegration: true,
            preload: require("./updater").update()
        }
    })
    win.loadFile(__dirname + "/index.html")
}

app.whenReady().then(createWindow)