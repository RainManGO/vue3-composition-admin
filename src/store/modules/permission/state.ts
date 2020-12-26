/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 14:15:18
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-26 13:57:51
 */

import { RouteRecordRaw } from 'vue-router'

export interface PermissionState {
    routes: RouteRecordRaw[]
    dynamicRoutes: RouteRecordRaw[]
}

export const state: PermissionState = {
  routes: [],
  dynamicRoutes: []
}
