/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-29 09:05:40
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-29 09:07:23
 */

// {
//     "code": 0,
//     "msg": "success",
//     "data": {
//         "accessToken": "admin-token"
//     }
// }

export interface RootObject<T>{
  code: number
  msg: string
  data: T
}
