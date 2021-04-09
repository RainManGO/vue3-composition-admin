<!--
 * @Description: 依赖包表格
 * @Author: ZY
 * @Date: 2021-01-18 11:09:25
 * @LastEditors: SCY
 * @LastEditTime: 2021-04-02 09:37:05
-->

<template>
  <el-card
    class="card"
    shadow="never"
    style="border-radius: 8px;"
  >
    <div>
      <span>依赖信息</span>
      <div style="float: right">
        部署时间:{{ updateTime }}
      </div>
    </div>

    <div class="bottom-btn">
      <a
        target="_blank"
        href="https://github.com/vuejs/vue-next"
      >
        <el-button type="success">
          vue3.x
        </el-button>
      </a>
      <a
        target="_blank"
        href="https://element-plus.gitee.io/#/zh-CN"
      >
        <el-button type="primary">
          element-plus
        </el-button>
      </a>
      <a
        target="_blank"
        href="https://github.com/koajs/koa"
      >
        <el-button type="info">
          koa2.x
        </el-button>
      </a>
      <a
        target="_blank"
        href="https://github.com/apache/echarts"
      >
        <el-button type="danger">echarts5</el-button>
      </a>
      <a
        target="_blank"
        href="https://github.com/intlify/vue-i18n-next"
      >
        <el-button type="warning">vue-i18n-next</el-button>
      </a>
      <a
        target="_blank"
        href="https://www.tslang.cn/docs/home.html"
      >
        <el-button type="primary">ts-3.9.3</el-button>
      </a>
    </div>
    <table class="table">
      <tr>
        <td>@vue/cli版本</td>
        <td>{{ devDependencies["@vue/cli-service"] }}</td>
        <td>vue版本</td>
        <td>{{ dependencies["vue"] }}</td>
      </tr>
      <tr>
        <td>vue-router版本</td>
        <td>{{ dependencies["vue-router"] }}</td>
        <td>vuex版本</td>
        <td>{{ dependencies["vuex"] }}</td>
      </tr>
      <tr>
        <td>faker版本</td>
        <td>{{ dependencies["faker"] }}</td>
        <td>koa-body版本</td>
        <td>{{ dependencies["koa-body"] }}</td>
      </tr>
      <tr>
        <td>lodash版本</td>
        <td>{{ dependencies["lodash"] }}</td>
        <td>normalize版本</td>
        <td>{{ dependencies["normalize.css"] }}</td>
      </tr>
      <tr>
        <td>dotenv-cli版本</td>
        <td>{{ devDependencies["dotenv-cli"] }}</td>
        <td>concurrently版本</td>
        <td>{{ devDependencies["concurrently"] }}</td>
      </tr>
      <tr>
        <td>eslint版本</td>
        <td>{{ devDependencies["eslint"] }}</td>
        <td>sass版本</td>
        <td>{{ devDependencies["sass"] }}</td>
      </tr>
      <tr>
        <td>style-resources-loader版本</td>
        <td>{{ devDependencies["style-resources-loader"] }}</td>
        <td>ts-node-dev版本</td>
        <td>{{ devDependencies["ts-node-dev"] }}</td>
      </tr>
    </table>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { dependencies, devDependencies } from '../../../../../package.json'
export default defineComponent({
  setup() {
    const state = reactive({
      updateTime: process.env.VUE_APP_UPDATE_TIME
    })
    return {
      dependencies,
      devDependencies,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  color: #666;
  border-collapse: collapse;
  background-color: #fff;

  td {
    position: relative;
    min-height: 20px;
    padding: 9px 15px;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #e6e6e6;

    &:nth-child(odd) {
      width: 20%;
      text-align: right;
      background-color: #f7f7f7;
    }
  }
}

.bottom-btn {
  button {
    margin: 16px 10px 15px 0;
  }
}
</style>
