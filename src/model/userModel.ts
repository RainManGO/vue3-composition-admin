/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-29 15:57:00
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-15 09:33:11
 */

// {
//     "code": 0,
//     "msg": "success",
//     "data": {
//         "id": 0,
//         "username": "admin",
//         "password": "any",
//         "name": "Super Admin",
//         "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
//         "introduction": "I am a super administrator",
//         "email": "admin@test.com",
//         "phone": "1234567890",
//         "roles": [
//             "admin"
//         ]
//     }
// }

export interface UserInfoModel {
  id: number
  username: string
  password: string
  name: string
  avatar: string
  introduction: string
  email: string
  phone: string
  roles: string[]
}

export interface Users {
  items: any
}
