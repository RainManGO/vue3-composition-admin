/*
 * @Description:
 * @Autor: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 20:32:26
 */
import { createApp } from 'vue'
import App from './App.vue'
import './pwa/registerServiceWorker'
import router from './router'
import { store } from './store'
import { loadAllPlugins } from './plugins'
import { useStore } from 'vuex'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)
app.use(store).use(router).mount('#app')
console.log(useStore())
