<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-14 09:11:22
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-16 16:31:05
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
import { defineComponent } from 'vue'
import Avatar from '@/components/avatar/avatar.vue'

export default defineComponent({
  components: {
    Avatar
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const showImageUpload = false
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const image = 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const params = { someParams: 'your_params_goes_here' }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const headers = { smail: '*_~' }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function toggleShow(this: any) {
      this.showImageUpload = !this.showImageUpload
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onCropUploadSuccess(this: any, jsonData: any, field: string) {
      this.showImageUpload = false
      this.image = jsonData.files[field]
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onClose(this: any) {
      this.showImageUpload = false
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
