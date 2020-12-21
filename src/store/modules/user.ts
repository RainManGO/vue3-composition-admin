/*
 * @Description: 用户相关
 * @Author: ZY
 * @Date: 2020-12-21 10:48:59
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-21 10:57:25
 */
import { Module } from 'vuex'
import { RootState } from '../index'
import { getToken, setToken, removeToken } from '@/utils/cookies'

export interface UserState{
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

const UserModule: Module<UserState, RootState> = {
  state: {
    token: getToken() || '',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    email: ''
  },
  mutations: {
    SET_TOKEN(state: UserState, token: string) {
      state.token = token
    },
    SET_NAME(state: UserState, name: string) {
      state.name = name
    },
    SET_AVATAR(state: UserState, avatar: string) {
      state.avatar = avatar
    },
    SET_INTRODUCTION(state: UserState, introduction: string) {
      state.introduction = introduction
    },
    SET_ROLES(state: UserState, roles: string[]) {
      state.roles = roles
    },
    SET_EMAIL(state: UserState, email: string) {
      state.email = email
    }
  }

}
