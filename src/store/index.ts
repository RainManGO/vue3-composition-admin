/*
 * @Description: st
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 20:46:07
 */
import { createStore, createLogger } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { store as app, AppStore, AppState } from '@/store/modules/app'
import { store as settings, SettingStore, SettingsState } from '@/store/modules/settings'
import { store as permission, PermissionStore, PermissionState } from '@/store/modules/permission'
import { store as user, UserStore, UserState } from '@/store/modules/user'
import { store as tagViews, TagsStore, TagsViewState } from '@/store/modules/tagsview'

export interface RootState {
    app: AppState
    settings: SettingsState
    permission: PermissionState
    user: UserState
    tagViews: TagsViewState
}

export type Store = AppStore<Pick<RootState, 'app'>> & SettingStore<Pick<RootState, 'settings'>>
& PermissionStore<Pick<RootState, 'permission'>> & UserStore<Pick<RootState, 'user'>>
& TagsStore<Pick<RootState, 'tagViews'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
    app,
    settings,
    permission,
    user,
    tagViews
  }
})

export function useStore(): Store {
  return store as Store
}
