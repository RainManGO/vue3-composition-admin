<!--
 * @Description: 导航栏
 * @Author: ZY
 * @Date: 2020-12-17 15:52:19
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-21 16:34:56
-->
<template>
  <div>导航栏{{ device }}</div>
</template>

<script>
// import { reactive, toRefs } from 'vue'
import Resize from '@/layout/resize'
export default {
  setup() {
    console.log(Resize.device)

    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
