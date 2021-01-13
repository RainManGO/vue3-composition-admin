/*
 * @Description: 
 * @Author: ZY
 * @Date: 2020-12-28 15:13:48
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-12 15:22:27
 */


export interface UserBean {
    id: number
    username: string
    password: string
    name: string
    email: string
    phone: string
    avatar: string
    introduction: string
    roles: string[]
}
export interface RoleBean {
    key: string
    name: string
    description: string
    routes: any
  }