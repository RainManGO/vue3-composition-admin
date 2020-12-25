<!--
 * @Description: 语言选择
 * @Author: ZY
 * @Date: 2020-12-23 20:06:29
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-25 10:11:46
-->
<template>
  <div>
    <el-dropdown>
      <svg
        class="icon"
        aria-hidden="true"
        font-size="20px"
      >
        <use xlink:href="#iconlanguage" />
      </svg>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in languages"
            :key="item.value"
            :disabled="language===item.value"
          >
            <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
type Language = {
    name: string
    value: string
}

export default defineComponent({
  created() {
    console.log(this)
  },
  setup() {
    const store = useStore()
    const { locale } = useI18n()

    const state = reactive({
      languages: [{ name: 'en', value: 'en' }, { name: '中文', value: 'zh-CN' }] as Array<Language>,
      handleSetLanguage: (lang: string) => {
        locale.value = lang
        store.dispatch(AppActionTypes.ACTION_SET_LANGUAGE, lang)
        ElMessage({
          message: 'Switch Language Success',
          type: 'success'
        })
      }
    })
    const language = computed(() => {
      return store.state.app.language
    })
    return {
      ...toRefs(state),
      language
    }
  }
})

</script>
