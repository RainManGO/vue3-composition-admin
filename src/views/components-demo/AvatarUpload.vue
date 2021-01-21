<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-14 09:11:22
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-21 17:18:31
-->

<template>
  <div class="components-container">
    <aside>
      This is based on
      <a
        class="link-type"
        href="//github.com/dai-siki/vue-image-crop-upload"
      >
        vue-image-crop-upload
      </a>
    </aside>
    <el-button
      type="primary"
      icon="el-icon-upload"
      tyle="position: absolute;bottom: 15px;margin-left: 40px;"
      @click="toggleShow"
    >
      Change Avatar
    </el-button>
    <Avatar
      v-model="showImageUpload"
      field="avatar"
      :width="300"
      :height="300"
      :params="params"
      :headers="headers"
      url="https://httpbin.org/post"
      @close="onClose"
      @crop-upload-success="onCropUploadSuccess"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Avatar from '@/components/avatar/Index.vue'

export default defineComponent({
  components: {
    Avatar
  },
  setup() {
    const state = reactive({
      showImageUpload: false,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      params: { someParams: 'your_params_goes_here' },
      headers: { smail: '*_~' }
    })
    const stateAsRefs = toRefs(state)
    const toggleShow = () => {
      state.showImageUpload = !state.showImageUpload
    }
    const onCropUploadSuccess = (jsonData: any, field: string) => {
      state.showImageUpload = false
      state.image = jsonData.files[field]
    }
    const onClose = () => {
      state.showImageUpload = false
    }
    return {
      toggleShow,
      onCropUploadSuccess,
      onClose,
      ...state,
      ...stateAsRefs
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
