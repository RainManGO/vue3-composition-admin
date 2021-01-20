/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-18 14:46:51
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-18 15:23:55
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const nestedRouter: Array<RouteRecordRaw> = [{
  path: '/nested',
  component: Layout,
  redirect: 'noredirect',
  name: 'Nested',
  meta: {
    title: 'nested',
    icon: '#icontable'
  },
  children: [
    {
      path: 'menu1',
      component: () => import(/* webpackChunkName: "menu1" */ '@/views/nested/menu1/index.vue'),
      name: 'Menu1',
      meta: { title: 'menu1', noCache: true },
      children: [
        {
          path: 'menu1-1',
          component: () => import(/* webpackChunkName: "menu1-1" */ '@/views/nested/menu1/menu1-1/index.vue'),
          name: 'Menu1-1',
          meta: { title: 'menu1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import(/* webpackChunkName: "menu1-2" */ '@/views/nested/menu1/menu1-2/index.vue'),
          name: 'Menu1-2',
          meta: { title: 'menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import(/* webpackChunkName: "menu1-2-1" */ '@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              name: 'Menu1-2-1',
              meta: { title: 'menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import(/* webpackChunkName: "menu1-2-2" */ '@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              name: 'Menu1-2-2',
              meta: { title: 'menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import(/* webpackChunkName: "menu1-3" */ '@/views/nested/menu1/menu1-3/index.vue'),
          name: 'Menu1-3',
          meta: { title: 'menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      component: () => import(/* webpackChunkName: "menu2" */ '@/views/nested/menu2/index.vue'),
      name: 'Menu2',
      meta: { title: 'menu2' }
    }
  ]
}]

export default nestedRouter
