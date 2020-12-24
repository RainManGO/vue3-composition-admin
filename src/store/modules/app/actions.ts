/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 14:29:18
 */
import { ActionTree, ActionContext } from 'vuex'

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store'
import { AppState, DeviceType } from './state'
import { Mutations } from './mutations'
import { AppMutationTypes } from './mutation-types'
import { AppActionTypes } from './action-types'
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<AppState, RootState>, 'commit'>

export interface Actions {
  [AppActionTypes.ACTION_TOGGLE_SIDEBAR](
    { commit }: AugmentedActionContext,
    withoutAnimation: boolean
  ): void
  [AppActionTypes.ACTION_CLOSE_SIDEBAR](
    { commit }: AugmentedActionContext,
    withoutAnimation: boolean
  ): void
  [AppActionTypes.ACTION_TOGGLE_DEVICE](
    { commit }: AugmentedActionContext,
    device: DeviceType
  ): void
  [AppActionTypes.ACTION_SET_LANGUAGE](
    { commit }: AugmentedActionContext,
    language: string
  ): void
  [AppActionTypes.ACTION_SET_SIZE](
    { commit }: AugmentedActionContext,
    size: string
  ): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
  [AppActionTypes.ACTION_TOGGLE_SIDEBAR]({ commit }, withoutAnimation: boolean) {
    commit(AppMutationTypes.TOGGLE_SIDEBAR, withoutAnimation)
  },
  [AppActionTypes.ACTION_CLOSE_SIDEBAR]({ commit }, withoutAnimation: boolean) {
    commit(AppMutationTypes.CLOSE_SIDEBAR, withoutAnimation)
  },
  [AppActionTypes.ACTION_TOGGLE_DEVICE]({ commit }, device: DeviceType) {
    commit(AppMutationTypes.TOGGLE_DEVICE, device)
  },
  [AppActionTypes.ACTION_SET_LANGUAGE]({ commit }, language: string) {
    commit(AppMutationTypes.SET_LANGUAGE, language)
  },
  [AppActionTypes.ACTION_SET_SIZE]({ commit }, size: string) {
    commit(AppMutationTypes.SET_SIZE, size)
  }
}
