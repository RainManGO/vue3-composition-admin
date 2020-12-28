/*
 * @Description: app Mutations
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 11:45:02
 */
import { MutationTree } from 'vuex'
import { UserState } from './state'
import { UserMutationTypes } from './mutation-types'

export type Mutations<S = UserState> = {
  [UserMutationTypes.SET_TOKEN](state: S, token: string): void
  [UserMutationTypes.SET_NAME](state: S, name: string): void
  [UserMutationTypes.SET_AVATAR](state: S, avatar: string): void
  [UserMutationTypes.SET_INTRODUCTION](state: S, introduction: string): void
  [UserMutationTypes.SET_ROLES](state: S, roles: string[]): void
  [UserMutationTypes.SET_EMAIL](state: S, email: string): void
}

export const mutations: MutationTree<UserState> & Mutations = {
  [UserMutationTypes.SET_TOKEN](state: UserState, token: string) {
    state.token = token
  },

  [UserMutationTypes.SET_NAME](state: UserState, name: string) {
    state.name = name
  },

  [UserMutationTypes.SET_AVATAR](state: UserState, avatar: string) {
    state.avatar = avatar
  },

  [UserMutationTypes.SET_INTRODUCTION](state: UserState, introduction: string) {
    state.introduction = introduction
  },

  [UserMutationTypes.SET_ROLES](state: UserState, roles: string[]) {
    state.roles = roles
  },

  [UserMutationTypes.SET_EMAIL](state: UserState, email: string) {
    state.email = email
  }

}
