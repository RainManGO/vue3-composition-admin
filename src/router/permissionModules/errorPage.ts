
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const ExampleRouter: Array<RouteRecordRaw> = [
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'errorPages',
      icon: '#icon404'
    },
    children: [
      {
        path: '401',
        component: () => import(/* webpackChunkName: "error-page-401" */ '@/views/error-page/401.vue'),
        name: 'Page401',
        meta: {
          title: 'page401',
          noCache: true
        }
      },
      {
        path: '404',
        component: () => import(/* webpackChunkName: "error-page-404" */ '@/views/error-page/404.vue'),
        name: 'Page404',
        meta: {
          title: 'page404',
          noCache: true
        }
      }
    ]
  }
]

export default ExampleRouter
