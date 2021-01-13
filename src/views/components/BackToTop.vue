<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-11 15:37:42
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-13 18:50:39
-->
<template>
  <div>
    <div class="placeholder-container">
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
      <div>1111</div>
    </div>
    <BackToTop
      :custom-style="BackToTopStyle"
      :visibility-height="300"
      :back-position="50"
      transition-name="fade"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackToTop from '@/components/back_to_top/Index.vue'
export default defineComponent({
  components: {
    BackToTop
  },
  setup() {
    const BackToTopStyle = {
      right: '50px',
      bottom: '50px',
      width: '40px',
      height: '40px',
      'border-radius': '4px',
      'line-height': '45px',
      background: '#e7eaf1'
    }
    return {
      BackToTopStyle
    }
  }
})
</script>

<style lang="scss" scoped>
.placeholder-container div {
  margin: 10px;
}
</style>
