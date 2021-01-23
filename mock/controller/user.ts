/*
 * @Description: 用户相关接口
 * @Author: ZY
 * @Date: 2020-12-28 09:46:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-23 15:54:34
 */

import { post, prefix ,get} from "../requestDecorator";
import userList from "../mockdb/userList";
import * as Koa from 'koa';
@prefix('/user')
export default class User {
    
 @post('/login')
 async login(ctx:any) {
   const {username} = ctx.request.body   
   for (const user of userList) {
    if (user.username === username) {
      return {
        accessToken: username + '-token'
      }
    }
  }
  return ctx.throw(401);
 }

 @get('/userInfo')
 async getUserInfo(ctx:Koa.Context){
    let token = ctx.request.header.token
    return token === 'admin-token' ? userList[0] :  userList[1]
 }
 
 @get('/getUsers')
 async getUsers(ctx:any){
  const { name } = ctx.query
  const users = userList.filter(user => {
    const lowerCaseName = user.name.toLowerCase()
    return !(name && lowerCaseName.indexOf((name as string).toLowerCase()) < 0)
  })
  return{
    code: 20000,
    data: {
      items: users
    }
  }
 }
}