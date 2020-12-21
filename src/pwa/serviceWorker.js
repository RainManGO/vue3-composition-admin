/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-17 10:25:25
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-17 11:13:10
 */
// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener('message', (e) => {
  if (e.data) {
    if (e.data === 'skipWaiting') {
      self.skipWaiting()
    }
  }
})

/* eslint-disable no-undef */
workbox.core.clientsClaim()
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
