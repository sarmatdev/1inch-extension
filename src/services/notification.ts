export const createNotification = (config) =>
  // @ts-ignore
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon-128x128.png',
    ...config
  })
