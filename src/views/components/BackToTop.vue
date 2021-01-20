<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-13 21:28:05
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-14 09:19:18
-->
<template>
  <div class="components-container">
    <aside>{{ t('components.backToTopTips1') }}</aside>
    <aside>{{ t('components.backToTopTips2') }}</aside>
    <div class="placeholder-container">
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
    </div>
    <!-- you can add element-ui's tooltip -->
    <Test
      :customStyle="myBackToTopStyle"
      :visibilityHeight="300"
      :backPosition="50"
      transitionName="fade"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
// import BackToTop from '@/components/backtop/Index.vue'
import Test from '@/components/backtop/test.vue'

export default defineComponent({
  components: {
    Test
  },
  setup() {
    const { t } = useI18n()
    const myBackToTopStyle = {
      right: '50px',
      bottom: '50px',
      width: '40px',
      height: '40px',
      'border-radius': '4px',
      'line-height': '45px', // Please keep consistent with height to make it center vertically
      background: '#e7eaf1'
    }
    return {
      t,
      myBackToTopStyle
    }
  }
})
</script>

<style lang="scss" scoped>
.placeholder-container div {
  margin: 10px;
}
</style>
