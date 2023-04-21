/*
 * @Author: ZY
 * @Date: 2023-04-05 21:48:55
 * @LastEditors: ZY
 * @LastEditTime: 2023-04-19 15:04:12
 * @FilePath: /vue3-composition-admin/src/router/index.ts
 * @Description: 路由
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      name: 'layout',
      component:() => import('../layout/LayoutIndexView.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/DashBoardView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/user/LoginView.vue')
    }
  ]
})

export default router
