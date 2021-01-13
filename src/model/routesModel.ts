/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-12 16:39:17
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-12 16:41:49
 */

export interface Meta {
  hidden: boolean
}

export interface Children {
  path: string
  component: string
}

export interface Route {
  path: string
  component: string
  meta: Meta
  children: Children[]
}

export interface Routes {
  routes: Route[]
}
