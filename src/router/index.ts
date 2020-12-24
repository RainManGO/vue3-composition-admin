/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 08:45:37
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const files = require.context('./modules', true, /\.ts$/)
let modules: Array<RouteRecordRaw> = []
files.keys().forEach((key) => {
  if (key === './index.ts') return
  modules = modules.concat(files(key).default)
})

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  ...modules
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
