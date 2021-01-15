<!--
 * @Description: 折线图案例
 * @Author: ZY
 * @Date: 2021-01-08 19:27:22
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-15 13:45:03
-->
<template>
  <div class="chart-container">
    <LineChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LineChart from '@/components/charts/LineCart.vue'
export default defineComponent({
  components: {
    LineChart
  }
})
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
