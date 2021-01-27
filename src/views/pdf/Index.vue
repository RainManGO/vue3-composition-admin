<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-25 10:07:11
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 13:56:48
-->
<template>
  <div class="app-container">
    <aside style="margin-top:15px;">
      {{ t('pdf.tips') }}
    </aside>
    <router-link
      target="_blank"
      to="/pdf-download-example"
    >
      <el-button type="primary">
        Click to download PDF
      </el-button>
    </router-link>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    return { t }
  }
})
</script>
