<!--
 * @Description: 导航栏
 * @Author: ZY
 * @Date: 2020-12-17 15:52:19
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-22 17:18:02
-->
<template>
  <div>
    <bread-crumb />
  </div>
</template>

<script>
// import { reactive, toRefs } from 'vue'
// import Resize from '@/layout/resize'
import BreadCrumb from '@/components/bread_crumb/Index.vue'
export default {
  components: {
    'bread-crumb': BreadCrumb
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
