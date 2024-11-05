export const isElectron = import.meta.env.MODE === 'electron'
export const isVSCode = location.protocol === 'vscode-webview:'
export const isLocalMode = isElectron || isVSCode

export const basePath = isVSCode ? window.baseURI : '/icones'
export const staticPath = isVSCode
  ? window.staticURI
  : (isElectron && import.meta.env.PROD) ? '../../app.asar/dist' : '/icones'
