/*
 * @Description:
 * @Autor: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-21 17:28:47
 */
import { createApp } from 'vue'
import App from './App.vue'
import './pwa/registerServiceWorker'
import router from './router'
import { store } from './store'
import { loadAllPlugins } from './plugins'

import { useStore } from 'vuex'

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)
app.use(store).use(router).mount('#app')
console.log(useStore())
