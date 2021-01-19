/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-11 15:13:20
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-12 15:44:38
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'Components',
    meta: {
      title: 'components',
      icon: '#iconcomponent'
    },
    children: [
      {
        path: 'tinymce',
        component: () => import(/* webpackChunkName: "tinymce" */ '@/views/components/tinymceModules.vue'),
        name: 'TinymceDemo',
        meta: { title: 'tinymce' }
      },
      {
        path: 'back-to-top',
        component: () =>
          import(
            /* webpackChunkName: "BackToTop" */ '@/views/components/BackToTop.vue'
          ),
        name: 'BackToTopDemo',
        meta: {
          title: 'backToTop',
          noCache: true
        }
      },
      {
        path: 'avatar-upload',
        component: () =>
          import(
            /* webpackChunkName: "AvatarUpload" */ '@/views/components/AvatarUpload.vue'
          ),
        name: 'AvatarUploadDemo',
        meta: {
          title: 'avatarUpload',
          noCache: true
        }
      },
      {
        path: 'count-to',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/components/CountTo.vue'
          ),
        name: 'CountToDemo',
        meta: {
          title: 'countTo',
          noCache: true
        }
      }
    ]
  }
]

export default componentsRouter
