/*
 * @Author: ZY
 * @Date: 2023-04-05 21:48:55
 * @LastEditors: ZY
 * @LastEditTime: 2023-04-17 19:36:14
 * @FilePath: /vue3-composition-admin/src/main.ts
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
