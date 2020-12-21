/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-21 10:41:36
 */
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import appModule, { AppState } from './modules/app'
export interface RootState {
    appState: AppState
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore({
  modules: {
    appModule
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
