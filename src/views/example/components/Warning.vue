<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-14 15:01:56
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 13:53:17
-->
<template>
  <aside>
    {{ t('example.warning') }}
    <a
      href="https://armour.github.io/vue-typescript-admin-docs/guide/essentials/tags-view.html"
      target="_blank"
    >Document</a>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  }
})
</script>
