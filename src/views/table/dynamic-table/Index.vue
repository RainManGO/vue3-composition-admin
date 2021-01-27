<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-25 14:55:09
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 14:03:13
-->
<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      {{ t('table.dynamicTips1') }}
    </div>
    <FixedHeaderTable />

    <div style="margin:30px 0 5px 20px">
      {{ t('table.dynamicTips2') }}
    </div>
    <UnfixedHeaderTable />
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import FixedHeaderTable from './components/FixedHeaderTable.vue'
import UnfixedHeaderTable from './components/UnfixedHeaderTable.vue'
export default defineComponent({
  components: {
    FixedHeaderTable,
    UnfixedHeaderTable
  },
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  }
})

</script>
