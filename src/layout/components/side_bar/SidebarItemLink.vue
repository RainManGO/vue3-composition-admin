<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 11:34:20
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-25 13:58:56
-->

<template>
  <a
    v-if="isExternal(to)"
    :href="to"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      isExternal
    }
  }
})
</script>
