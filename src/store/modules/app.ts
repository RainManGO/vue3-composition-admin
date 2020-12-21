/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-17 17:16:28
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-21 10:32:01
 */
import { getSidebarStatus, getSize, setSidebarStatus, setLanguage, setSize } from '@/utils/cookies'
import { getLocale } from '@/lang'
import { ActionContext, Module } from 'vuex'
import { RootState } from '../index'
export enum DeviceType {
    Mobile,
    Desktop,
}

export interface AppState {
    device: DeviceType
    sidebar: {
      opened: boolean
      withoutAnimation: boolean
    }
    language: string
    size: string
}

const appModule: Module<AppState, RootState> = {

  state: {
    device: DeviceType.Desktop,
    sidebar: {
      opened: getSidebarStatus() !== 'closed',
      withoutAnimation: false
    },
    language: getLocale(),
    size: getSize() || 'medium'
  },

  mutations: {
    TOGGLE_SIDEBAR(state: AppState, withoutAnimation: boolean) {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = withoutAnimation
      if (state.sidebar.opened) {
        setSidebarStatus('opened')
      } else {
        setSidebarStatus('closed')
      }
    },

    CLOSE_SIDEBAR(state: AppState, withoutAnimation: boolean) {
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
      setSidebarStatus('closed')
    },

    TOGGLE_DEVICE(state: AppState, device: DeviceType) {
      state.device = device
    },

    SET_LANGUAGE(state: AppState, language: string) {
      state.language = language
      setLanguage(state.language)
    },

    SET_SIZE(state: AppState, size: string) {
      state.size = size
      setSize(state.size)
    }

  },
  actions: {
    toggleSideBar(ctx: ActionContext<AppState, RootState>, withoutAnimation: boolean) {
      ctx.commit('TOGGLE_SIDEBAR', withoutAnimation)
    },

    closeSideBar(ctx: ActionContext<AppState, RootState>, withoutAnimation: boolean) {
      ctx.commit('CLOSE_SIDEBAR', withoutAnimation)
    },

    toggleDevice(ctx: ActionContext<AppState, RootState>, device: DeviceType) {
      ctx.commit('TOGGLE_DEVICE', device)
    },

    setLanguage(ctx: ActionContext<AppState, RootState>, language: string) {
      ctx.commit('SET_LANGUAGE', language)
    },

    setSize(ctx: ActionContext<AppState, RootState>, size: string) {
      ctx.commit('SET_SIZE', size)
    }

  }
}

export default appModule
