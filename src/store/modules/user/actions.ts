/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-04 16:41:56
 */
import { ActionTree, ActionContext } from 'vuex'
import { RootState, useStore } from '@/store'
import { state, UserState } from './state'
import { Mutations } from './mutations'
import { UserMutationTypes } from './mutation-types'
import { UserActionTypes } from './action-types'
import { loginRequest, userInfoRequest } from '@/apis/user'
import { removeToken, setToken } from '@/utils/cookies'
import { PermissionActionType } from '../permission/action-types'
import router from '@/router'

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
    { commit }: AugmentedActionContext, role: string
    ): void
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext,
  ): void
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  async [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string}
  ) {
    let { username, password } = userInfo
    username = username.trim()
    loginRequest({ username, password }).then((res) => {
      if (res?.code === 0 && res.data.accessToken) {
        setToken(res.data.accessToken)
        commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
      }
    }).catch((err) => {
      console.log(err)
    })
  },

  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext) {
    removeToken()
    commit(UserMutationTypes.SET_TOKEN, '')
    commit(UserMutationTypes.SET_ROLES, [])
  },

  async [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ) {
    if (state.token === '') {
      throw Error('token is undefined!')
    }
    userInfoRequest().then(async(res) => {
      if (res?.code === 0) {
        commit(UserMutationTypes.SET_ROLES, res.data.roles)
        commit(UserMutationTypes.SET_NAME, res.data.name)
        commit(UserMutationTypes.SET_AVATAR, res.data.avatar)
        commit(UserMutationTypes.SET_INTRODUCTION, res.data.introduction)
        commit(UserMutationTypes.SET_EMAIL, res.data.email)
        return await res
      } else {
        throw Error('Verification failed, please Login again.')
      }
    })
  },

  async [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext,
    role: string
  ) {
    const token = role + '-token'
    const store = useStore()
    commit(UserMutationTypes.SET_TOKEN, token)
    setToken(token)
    await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO, undefined)
    store.dispatch(PermissionActionType.ACTION_SET_ROUTES, state.roles)
    store.state.permission.dynamicRoutes.forEach((item) => {
      router.addRoute(item)
    })
  },

  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ) {
    console.log(commit)
  }

}
