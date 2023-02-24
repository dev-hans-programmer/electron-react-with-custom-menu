const { ipcMain } = require('electron');

class EventsHandler {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
    this.register();
  }
  register() {
    ipcMain.handle('print:name', (_, args) => {
      const messaage = `Hey there, this is ${args}`;
      return messaage;
    });

    // Events
    ipcMain.on('close', (e, options) => {
      this.mainWindow.close();
    });

    ipcMain.on('maximize', (e, options) => {
      if (this.mainWindow.isMaximized()) {
        this.mainWindow.unmaximize();
      } else {
        this.mainWindow.maximize();
      }
    });

    ipcMain.on('minimize', (e, options) => {
      this.mainWindow.minimize();
    });
  }
}

module.exports = EventsHandler;
