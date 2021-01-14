<template>
  <ArticleDetail :is-edit="false" />
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
