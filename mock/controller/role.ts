/*
 * @Description:  角色权限
 * @Author: ZY
 * @Date: 2021-01-12 15:20:37
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-12 16:45:25
 */

import roles,{routes} from "../mockdb/role";
import faker from "faker";
import { post, prefix ,get,put,del} from "../requestDecorator";

@prefix('/roles')
export default class Roles {
    
 @get('/getRoles')
 async getRoles() {
    return {
        total: roles.length,
        items: roles
      }
 }

 @put('/createRole')
 async createRole(){
   return {
    key: faker.random.number({ min: 3, max: 10000 })
   }
 }

 @post('/updateRole')
 async updateRole(ctx:any){
   const {role} = ctx.request.body
   return {
    role
   }
 }

 @del('/deleteRole')
 async deleteRole(){
   return 'delete success'
 }

 @get('/getRoutes')
 async getRoutes() {
    return {
        routes
    }
 }

}