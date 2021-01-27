<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-18 09:25:19
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 13:49:32
-->
<template>
  <div class="components-container">
    <aside>
      {{ t('components.tinymceTips') }}
      <a
        target="_blank"
        class="link-type"
        href="https://armour.github.io/vue-typescript-admin-docs/features/components/rich-editor.html"
      >{{ t('components.documentation') }}</a>
    </aside>
    <div>
      <Tinymce
        v-if="tinymceActive"
        v-model:value="content"
        :height="400"
        @input="input"
      />
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="editor-content"
      v-html="content"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onActivated, onDeactivated } from 'vue'
import Tinymce from '@/components/tinymce/Index.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    Tinymce
  },
  setup() {
    const { t } = useI18n()
    const dataMap = reactive({
      content: '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="Logo" src="./favicon.ico" alt="Logo" width="100" height="100" /><ul><li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li></ul>',
      tinymceActive: true,
      input(value: any) {
        dataMap.content = value
      }
    })
    onActivated(() => {
      dataMap.tinymceActive = false
    })
    onDeactivated(() => {
      dataMap.tinymceActive = true
    })

    return {
      t,
      ...toRefs(dataMap)
    }
  }
})
</script>

<style lang="scss" scoped>
.editor-content {
  margin-top: 20px;
}
</style>
