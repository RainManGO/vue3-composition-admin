/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 15:03:52
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-25 15:15:22
 */

import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { PermissionState } from './state'
import { Mutations } from './mutations'
import { PermissionMutationType } from './mutation-types'
import { PermissionActionType } from './action-types'
import { RouteRecordRaw } from 'vue-router'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<PermissionState, RootState>, 'commit'>

export interface Actions {
    [PermissionActionType.ACTION_SET_ROUTES](
      { commit }: AugmentedActionContext
      , routes: RouteRecordRaw[]): void
}

export const actions: ActionTree<PermissionState, RootState> & Actions = {
  [PermissionActionType.ACTION_SET_ROUTES](
    { commit }: AugmentedActionContext
    , routes: RouteRecordRaw[]) {
    commit(PermissionMutationType.SET_ROUTES, routes)
  }
}
