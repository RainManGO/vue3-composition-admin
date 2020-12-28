/*
 * @Description: 
 * @Author: ZY
 * @Date: 2020-12-28 15:13:48
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 15:15:05
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