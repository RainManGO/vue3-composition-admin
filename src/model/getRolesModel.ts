/*
 * @Description: 角色模型
 * @Author: ZY
 * @Date: 2021-01-12 16:49:16
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-12 16:52:09
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

export interface Item {
  key: string
  name: string
  description: string
  routes: Route[]
}

export interface RolesModels {
  total: number
  items: Item[]
}
