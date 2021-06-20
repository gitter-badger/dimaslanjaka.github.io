import { BrowserWindow, webviewTag } from "electron";
import * as fs from "fs";

interface MainWindowOpt extends Object {
  loadUrl?: string;
  icon?: string;
}
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const isDev = process.env.ENV ? process.env.ENV.trim() === "true" : false;
export default function (
  options: MainWindowOpt = {
    //loadUrl: "http://127.0.0.1:" + port,
    icon: fs.realpathSync(__dirname + "/../Assets/Images/icon32.png"),
  }
) {
  let mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 640,
    height: 480,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      spellcheck: true,
      webviewTag: true,
      webSecurity: false,
    },
    icon: options.icon,
    show: false,
    center: true,
    frame: false,
  });
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  if (options.hasOwnProperty("loadUrl")) {
    mainWindow.loadURL(options.loadUrl).then((r) => console.info(r));
  } else {
    mainWindow.loadFile(__dirname + "/../Renderer/main.html").then((r) => console.info(r));
  }
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
  mainWindow.on("close", () => {
    mainWindow.webContents.send("stop-server");
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  return mainWindow;
}
