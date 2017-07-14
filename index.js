const { app, BrowserWindow } = require('electron')
const path = require('path')

let window

app.on('ready', () => {
  window = new BrowserWindow({ show: false })
  window.loadURL(path.join('file://', __dirname, 'index.html'))
  window.on('ready-to-show', () => {
    window.show()
  })
})
