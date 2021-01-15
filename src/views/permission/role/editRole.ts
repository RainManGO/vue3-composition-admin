/*
 * @Description: 编辑Role 操作抽离
 * @Author: ZY
 * @Date: 2021-01-13 09:43:17
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-13 13:57:40
 */

import { RouteRecordRaw } from 'vue-router'
export default function() {
  const flattenRoutes = (routes: RouteRecordRaw[]) => {
    let data: RouteRecordRaw[] = []
    routes.forEach(route => {
      data.push(route)
      if (route.children) {
        const temp = flattenRoutes(route.children)
        if (temp.length > 0) {
          data = [...data, ...temp]
        }
      }
    })
    return data
  }

  return {
    flattenRoutes
  }
}
