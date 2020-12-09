/*
 * @Description:
 * @Autor: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-09 11:10:08
 */
import { createApp } from 'vue'
import App from './App.vue'
import './pwa/registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
