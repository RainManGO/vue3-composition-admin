<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 11:34:20
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 18:56:19
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
  <div
    v-else
    @click="push"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'
import router from '@/router'
export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const push = () => {
      console.log(props.to)
      router.push(props.to).catch((err) => {
        console.log(err)
      })
    }
    return {
      push,
      isExternal
    }
  }
})
</script>
