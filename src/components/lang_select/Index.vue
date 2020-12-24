<!--
 * @Description: 语言选择
 * @Author: ZY
 * @Date: 2020-12-23 20:06:29
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 21:25:29
-->
<template>
  <div>
    <a-dropdown>
      <svg
        class="icon"
        aria-hidden="true"
        font-size="20px"
      >
        <use xlink:href="#iconlanguage" />
      </svg>
      <template #overlay>
        <a-menu>
          <a-menu-item
            v-for="item in languages"
            :key="item.value"
          >
            <a @click="handleSetLanguage(item.value)">{{ item.name }}</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, reactive, toRefs } from 'vue'
import { message } from 'ant-design-vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { useI18n } from 'vue-i18n'

type Language = {
    name: string
    value: string
}

export default defineComponent({
  setup() {
    const store = useStore()
    const { locale } = useI18n()
    const state = reactive({
      languages: [{ name: 'en', value: 'en' }, { name: '中文', value: 'zh-CN' }] as Array<Language>,
      language: store.state.app.language,
      handleSetLanguage: (lang: string) => {
        locale.value = lang
        store.dispatch(AppActionTypes.ACTION_SET_LANGUAGE, lang)
        message.success('Switch Language Success')
      }
    })

    return {
      ...toRefs(state)
    }
  }
})

</script>
