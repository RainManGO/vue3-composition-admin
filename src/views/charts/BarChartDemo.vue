<!--
 * @Description: 柱形图
 * @Author: ZY
 * @Date: 2021-01-08 19:24:26
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-15 09:06:21
-->
<template>
  <div class="chart-container">
    <BarChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarChart from '@/components/charts/BarChart.vue'
export default defineComponent({
  components: {
    BarChart
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
