<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-24 10:35:59
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-05 19:45:32
-->
<template>
  <div>
    <ScrollPane />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScrollPane from './ScrollPane.vue'

export default defineComponent({
  components: {
    ScrollPane
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>
