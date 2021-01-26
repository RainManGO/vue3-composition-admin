/*
 * @Description: 换肤
 * @Author: scy
 * @Date: 2021-01-21 20:13:03
 * @LastEditors: scy
 * @LastEditTime: 2021-01-21 21:24:27
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const ThemeRouter: Array<RouteRecordRaw> = [
  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "theme" */ '@/views/theme/Index.vue'),
        name: 'Theme',
        meta: {
          title: 'theme',
          icon: '#iconhuanfu'
        }
      }
    ]
  }
]

export default ThemeRouter
