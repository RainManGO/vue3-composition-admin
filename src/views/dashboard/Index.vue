<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-21 13:50:19
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-15 20:55:42
-->
<template>
  <div>
    dashboard++
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
