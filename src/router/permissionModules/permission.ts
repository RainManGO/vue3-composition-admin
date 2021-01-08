/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:32:52
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 20:30:22
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const permissionRouter: Array<RouteRecordRaw> = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/directive',
    meta: {
      title: 'permission',
      icon: '#iconsuo',
      roles: ['admin', 'editor'], // you can set roles in root nav
      alwaysShow: true // will always show the root menu
    },
    children: [
      {
        path: 'page',
        component: () => import(/* webpackChunkName: "permission-page" */ '@/views/permission/Page.vue'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import(/* webpackChunkName: "permission-directive" */ '@/views/permission/Directive.vue'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import(/* webpackChunkName: "permission-role" */ '@/views/permission/Role.vue'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  }
]
export default permissionRouter
