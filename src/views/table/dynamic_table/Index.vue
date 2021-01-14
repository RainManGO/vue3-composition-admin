<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      {{ $t('table.dynamicTips1') }}
    </div>
    <FixedHeaderTable />

    <div style="margin:30px 0 5px 20px">
      {{ $t('table.dynamicTips2') }}
    </div>
    <UnfixedHeaderTable />
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'
import { defineComponent } from 'vue'
import FixedHeaderTable from './components/FixedHeaderTable.vue'
import UnfixedHeaderTable from './components/UnfixedHeaderTable.vue'
export default defineComponent({
  components: {
    FixedHeaderTable,
    UnfixedHeaderTable
  }
})

</script>
