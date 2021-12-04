import { app, BrowserWindow, session } from "electron";
import path from "path";
import { isAds } from "./proxies/webview-proxy";
import * as proxies from "./proxies";
let win: BrowserWindow;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      partition: "persist:multi1",
      webviewTag: true
    }
  });

  function injectWebViewProxy() {
    const persists = ["persist:webviewsession", "persist:multi1"];
    persists.forEach((partition) => {
      const proxy = proxies.random();
      const ses = session.fromPartition(partition);
      ses.setProxy({ proxyRules: proxy }).then(() => {
        console.log(`injected [${partition}] with proxy: ${proxy}`);
      });
      ses.webRequest.onErrorOccurred((details) => {
        if (
          details.resourceType == "mainFrame" &&
          !isAds(new URL(details.url).hostname)
        ) {
          const errors = ["ERR_TIMED_OUT", "ERR_PROXY_CONNECTION_FAILED"];
          // check if the string has some of the terms
          const hasProxyError = errors.some((term) =>
            details.error.toUpperCase().includes(term)
          );

          console.log(
            hasProxyError ? "proxy error" : "request error",
            details.error,
            details.url
          );
        }
      });
    });

    // reload multi webview
    win.loadURL("file://" + __dirname + "/views/webview-multi.html");
  }
  injectWebViewProxy();

  win.on("closed", () => {
    win = null;
  });
}

app.setPath("userData", path.join(process.cwd(), "build/electron/cache"));
app.setPath("userCache", path.join(process.cwd(), "build/electron/data"));
app.whenReady().then(() => {
  createWindow();

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (win === null) {
      createWindow();
    }
  });
});
