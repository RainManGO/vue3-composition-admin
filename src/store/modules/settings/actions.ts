/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-26 14:19:03
 */
import { ActionTree, ActionContext } from 'vuex'

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store'
import { SettingsState } from './state'
import { Mutations } from './mutations'
import { SettingsMutationTypes } from './mutation-types'
import { SettingsActionTypes } from './action-types'
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<SettingsState, RootState>, 'commit'>

export interface Actions {
  [SettingsActionTypes.ACTION_CHANGE_SETTING](
    { commit }: AugmentedActionContext,
    payload: {key: string, value: any}
  ): void
}

export const actions: ActionTree<SettingsState, RootState> & Actions = {
  [SettingsActionTypes.ACTION_CHANGE_SETTING](
    { commit }: AugmentedActionContext,
    payload: {key: string, value: any}
  ) {
    commit(SettingsMutationTypes.CHANGE_SETTING, payload)
  }
}
