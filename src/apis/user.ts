/*
 * @Description: 用户相关接口
 * @Author: ZY
 * @Date: 2020-12-28 14:40:50
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-04 16:35:48
 */
import { RootObject } from '@/model/rootObject'
import { UserInfoModel } from '@/model/userModel'
import https from '@/utils/https'
import { LoginModel } from '@/views/user_manager/login/model/loginModel'
import { RequestParams, ContentType, Method } from 'axios-mapper'

export const loginRequest = (userInfo: RequestParams) => {
  console.log('2222')

  return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = () => {
  return https().request<RootObject<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}
