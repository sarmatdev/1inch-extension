/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'development') {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
      url: 'popup/index.html',
    })
  })
}
