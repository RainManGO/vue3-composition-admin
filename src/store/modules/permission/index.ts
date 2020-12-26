/*
 * @Description: permission moudle
 * @Author: ZY
 * @Date: 2020-12-26 13:45:52
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-26 14:20:31
 */

import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module
} from 'vuex'

// TODO: How to surpass cyclical dependency linting errors cleanly?
import { RootState } from '@/store'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import type { PermissionState } from './state'
import { state } from './state'

export { PermissionState }

export type PermissionStore<S = PermissionState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
  & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<Mutations[K]>
  } & {
    dispatch<K extends keyof Actions>(
      key: K,
      payload: Parameters<Actions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<Actions[K]>
  };
export const store: Module<PermissionState, RootState> = {
  state,
  mutations,
  actions
  // TODO: With namespaced option turned on, having problem how to use dispatch with action types...
  // But without it, a bigger store might have clashes in namings
  // namespaced: true,
}
