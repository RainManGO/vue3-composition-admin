/*
 * @Description: 引导页
 * @Author: ZY
 * @Date: 2021-01-21 20:13:03
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 21:24:27
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const GuideRouter: Array<RouteRecordRaw> = [
  {
    path: '/guide',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/Index.vue'),
        name: 'Guide',
        meta: {
          title: 'guide',
          icon: '#iconguide'
        }
      }
    ]
  }
]

export default GuideRouter
