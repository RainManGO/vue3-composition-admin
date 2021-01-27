<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-14 08:40:34
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 15:23:47
-->
<template>
  <div class="tab-container">
    <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert
      :closable="false"
      style="
        width: 200px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 30px;
      "
      title="Tab with keep-alive"
      type="success"
    />
    <el-tabs
      v-model="activeName"
      style="margin-top: 15px"
      type="border-card"
    >
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <keep-alive>
          <TabPane
            v-if="activeName === item.key"
            :type="item.key"
            @create="showCreatedTimes"
          />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TabPane from './components/TabPane.vue'
export default defineComponent({
  components: {
    TabPane
  },
  setup() {
    const route = useRoute()
    const dataMap = reactive({
      route: route,
      router: useRouter(),
      tabMapOptions: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0,
      showCreatedTimes() {
        dataMap.createdTimes = dataMap.createdTimes + 1
      }
    })
    onMounted(() => {
      const tab = route.query.tab as string
      if (tab) {
        dataMap.activeName = tab
      }
    })
    watch(() => dataMap.activeName, (nv) => {
      dataMap.router
        .push(`${dataMap.route.path}?tab=${nv}`)
        .catch((err) => {
          console.warn(err)
        })
    })
    return { ...toRefs(dataMap) }
  }
})
</script>

<style lang="scss" scoped>
.tab-container {
  margin: 30px;
}
</style>
