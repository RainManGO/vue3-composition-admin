<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-20 10:13:52
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-20 11:52:22
-->
<template>
  <ArticleDetail :isEdit="true" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ArticleDetail from './components/ArticleDetail.vue'

export default defineComponent({
  components: {
    ArticleDetail
  }
})
</script>
