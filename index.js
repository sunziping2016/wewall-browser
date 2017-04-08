const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

require('electron-debug')({enabled: true});

let win;

app.commandLine.appendSwitch('enable-transparent-visuals');
app.commandLine.appendSwitch('disable-gpu');


app.on('ready', () => {
	const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    win = new BrowserWindow({x:0,y:0,width:width,height:height/3,frame:false,transparent:true,resizable:false});
    win.loadURL('https://sunziping2016.github.io/wewall-client/danmu/');
    win.on('closed', () => {
        win = null;
    });
});

app.on('window-all-closed', () => {
    app.quit();
});
