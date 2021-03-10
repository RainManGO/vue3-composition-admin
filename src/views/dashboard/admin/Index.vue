<!--
 * @Description: admin 权限主页
 * @Author: ZY
 * @Date: 2021-01-15 18:44:25
 * @LastEditors: ZY
 * @LastEditTime: 2021-03-10 13:52:26
-->
<template>
  <div class="dashboard-editor-container">
    <GithubCorner class="github-corner" />

    <el-row :gutter="8">
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 16}"
        :xl="{span: 16}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <DependsTable />
      </el-col>
    </el-row>

    <el-row>
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 16}"
        :xl="{span: 16}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <UpdateTimeline />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import DependsTable from './components/DependsTable.vue'
export default {
  components: {
    DependsTable
  },
  setup() {
    const data = {
      newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
      },
      purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130]
      },
      shoppings: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
      }
    }

    const lineChartData = ref(data.newVisitis)
    const handleSetLineChartData = (type) => {
      lineChartData.value = data[type]
    }

    return {
      lineChartData,
      handleSetLineChartData
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner{
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
