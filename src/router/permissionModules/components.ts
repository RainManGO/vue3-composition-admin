/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-11 15:13:20
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-19 18:32:14
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
        path: 'dropzone',
        component: () =>
          import(
            /* webpackChunkName: "AvatarUpload" */ '@/views/components/DropzoneDemo.vue'
          ),
        name: 'DropzoneDemo',
        meta: {
          title: 'dropzone',
          noCache: true
        }
      },
      {
        path: 'count-to',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/components/CountToDemo.vue'
          ),
        name: 'CountToDemo',
        meta: {
          title: 'countTo',
          noCache: true
        }
      },
      {
        path: 'draggable-list',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/components/DraggableListDemo.vue'
          ),
        name: 'DraggableListDemo',
        meta: {
          title: 'draggableList',
          noCache: true
        }
      },
      {
        path: 'draggable-select',
        component: () =>
          import(
            /* webpackChunkName: "CountTo" */ '@/views/components/DraggableSelectDemo.vue'
          ),
        name: 'DraggableSelectDemo',
        meta: {
          title: 'draggableSelect',
          noCache: true
        }
      }
    ]
  }
]

export default componentsRouter
