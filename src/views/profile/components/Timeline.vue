<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-23 11:03:25
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-23 11:03:26
-->
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) of timeline"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const timeline = ref([
      {
        timestamp: '2021/1/7',
        title: 'Update Github template',
        content: 'Armour committed 2021/1/7 20:46'
      },
      {
        timestamp: '2021/1/12',
        title: 'Update Github template',
        content: 'Armour committed 2021/1/12 20:46'
      },
      {
        timestamp: '2021/1/19',
        title: 'Build Template',
        content: 'Armour committed 2021/1/9 20:46'
      },
      {
        timestamp: '2021/1/23',
        title: 'Release New Version',
        content: 'Armour committed 2021/1/23 20:46'
      }
    ])

    return { timeline }
  }
})
</script>
