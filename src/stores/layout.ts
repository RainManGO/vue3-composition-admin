/*
 * @Author: ZY
 * @Date: 2023-04-17 20:41:04
 * @LastEditors: ZY
 * @LastEditTime: 2023-04-17 21:16:41
 * @FilePath: /vue3-composition-admin/src/stores/layout.ts
 * @Description: 布局配置
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface LayoutSettings {
  // layout 风格
  style: 'top' | 'side'
  //是否显示TagsView
  showTagsView: boolean
  //滚动是否隐藏头部
  scrollFixHeader: boolean
}

export const useLayoutStore = defineStore('layout', () => {
  const layoutSettings = ref<LayoutSettings>({
    style: 'side',
    showTagsView: true,
    scrollFixHeader: true
  })

  function setLayoutSettings(settings: Partial<LayoutSettings>) {
    layoutSettings.value = {
      ...layoutSettings.value,
      ...settings
    }
  }
  return { layoutSettings, setLayoutSettings }
})
