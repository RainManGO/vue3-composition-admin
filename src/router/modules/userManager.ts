/*
 * @Description: 用户管理相关路由管理
 * @Author: ZY
 * @Date: 2020-12-10 16:12:54
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-10 16:24:42
 */
import { RouteRecordRaw } from 'vue-router'

const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user_manager/login/Login.vue')
  }
]
export default UserManagerRouter
