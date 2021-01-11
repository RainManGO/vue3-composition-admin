<!--
 * @Description: 侧边栏logo(需要跟随侧边栏折叠)
 * @Author: ZY
 * @Date: 2020-12-25 11:34:37
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-09 17:30:30
-->

<template>
  <div
    class="sidebar-logo-container"
    :class="{'collapse': collapse}"
  >
    <transition name="sidebarLogoFade">
      <router-link
        v-if="false"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img
          src="favicon.ico"
          class="sidebar-logo"
        >
      </router-link>
      <router-link
        v-else
        key="expand"
        class="sidebar-logo-link"
        to="/"
      >
        <img
          src="favicon.ico"
          class="sidebar-logo"
        >
        <h1 class="sidebar-title">
          {{ title }}
        </h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import settings from '@/config/default/setting.config'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const title = settings.title
    return {
      title
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: $menuBg;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 0px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 12px;
    }
  }
}
</style>
