<!--
 * @Description: 设置页面
 * @Author: ZY
 * @Date: 2020-12-17 16:05:05
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 19:15:16
-->
<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">
        {{ $t('settings.title') }}
      </h3>

      <div class="drawer-item">
        <span>{{ $t('settings.theme') }}</span>
        <theme-picker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          @change="themeChange"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.showTagsView') }}</span>
        <el-switch
          v-model="showTagsView"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.showSidebarLogo') }}</span>
        <el-switch
          v-model="showSidebarLogo"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.fixedHeader') }}</span>
        <el-switch
          v-model="fixedHeader"
          class="drawer-switch"
        />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.sidebarTextTheme') }}</span>
        <el-switch
          v-model="sidebarTextTheme"
          class="drawer-switch"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { SettingsActionTypes } from '@/store/modules/settings/action-types'
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const store = useStore()
    const state = reactive({
      fixedHeader: store.state.settings.fixedHeader,
      showTagsView: store.state.settings.showTagsView,
      showSidebarLogo: store.state.settings.showSidebarLogo,
      sidebarTextTheme: store.state.settings.sidebarTextTheme,
      themeChange: (value: string) => {
        store.dispatch(SettingsActionTypes.ACTION_CHANGE_SETTING, { key: 'theme', value })
      }

    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
