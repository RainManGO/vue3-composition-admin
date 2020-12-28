/*
 * @Description: 用户相关接口
 * @Author: ZY
 * @Date: 2020-12-28 09:46:46
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 16:22:48
 */

import { post, prefix } from "../requestDecorator";
import userList from "../mockdb/userList";

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
  return ctx.throw(102);
 }

}