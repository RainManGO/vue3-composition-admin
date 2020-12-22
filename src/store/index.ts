/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-22 09:53:44
 */
import { createStore } from 'vuex'

// import { InjectionKey } from 'vue'
import appModule, { AppState } from './modules/app'
export interface RootState {
    appState: AppState
}

// eslint-disable-next-line symbol-description
// export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore({
  modules: {
    appModule
  }
})

// define your own `useStore` composition function
// export function useStore() {
//   return baseUseStore(key)
// }
