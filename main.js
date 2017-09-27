// Basic framework to get electron working in order to view Knockout Examples

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow
function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600, minWidth: 800, minHeight: 600})
    mainWindow.loadURL(`file://${__dirname}/`+process.argv.slice(2)[0])
    mainWindow.on('closed', function() {
        mainWindow = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
    if (mainWindw === null) {
        createWindow()
    }
})