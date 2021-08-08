export const createNotification = (config) =>
  // @ts-ignore
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'img/icon-128x128.png',
    ...config
  })
