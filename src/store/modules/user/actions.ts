/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 14:38:23
 */
import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { UserState } from './state'
import { Mutations } from './mutations'
import { UserMutationTypes } from './mutation-types'
import { UserActionTypes } from './action-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string}
    ): void
  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext
  ): void
  [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ): void
  [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext): void
    role: string
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext,
  ): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string}
  ) {
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password })
    setToken(data.accessToken)
    this.SET_TOKEN(data.accessToken)
  },
  [UserActionTypes.ACTION_SET_NAME](
    { commit }: AugmentedActionContext,
    name: string
  ) {
    commit(UserMutationTypes.SET_NAME, name)
  },
  [UserActionTypes.ACTION_SET_AVATAR](
    { commit }: AugmentedActionContext,
    avatar: string
  ) {
    commit(UserMutationTypes.SET_AVATAR, avatar)
  },
  [UserActionTypes.ACTION_SET_INTRODUCTION](
    { commit }: AugmentedActionContext,
    introduction: string
  ) {
    commit(UserMutationTypes.SET_INTRODUCTION, introduction)
  },
  [UserActionTypes.ACTION_SET_ROLES](
    { commit }: AugmentedActionContext,
    roles: string[]
  ) {
    commit(UserMutationTypes.SET_ROLES, roles)
  },
  [UserActionTypes.ACTION_SET_EMAIL](
    { commit }: AugmentedActionContext,
    email: string
  ) {
    commit(UserMutationTypes.SET_EMAIL, email)
  }
}
