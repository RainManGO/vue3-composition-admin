<!--
 * @Author: ZY
 * @Date: 2023-04-19 14:43:19
 * @LastEditors: ZY
 * @LastEditTime: 2023-04-19 17:05:51
 * @FilePath: /vue3-composition-admin/src/layout/LayoutIndexView.vue
 * @Description: Layout 首屏
-->
<script setup lang="ts">
import SideMenuLayout from "./SideMenuLayout.vue";
import TopMenuLayout from "./TopMenuLayout.vue";
import { useLayoutStore } from '@/stores/layout'
const { layoutSettings } = useLayoutStore()
</script>

<template>
    <component :is="layoutSettings.style === 'side' ? SideMenuLayout : TopMenuLayout" />
</template>

