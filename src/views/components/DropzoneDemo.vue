<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-14 09:11:22
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-21 17:26:29
-->
<template>
  <div class="components-container">
    <aside>
      Based on
      <a
        class="link-type"
        href="https://github.com/rowanwins/vue-dropzone"
      >
        vue-dropzone
      </a>
    </aside>
    <div class="editor-container">
      <Dropzone
        id="myVueDropzone"
        url="https://httpbin.org/post"
        @dropzone-success="dropzoneSuccess"
        @dropzone-removed-file="dropzoneRemovedFile"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import Dropzone from '@/components/dropzone/Index.vue'
export default defineComponent({
  components: {
    Dropzone
  },
  setup() {
    const { ctx } = getCurrentInstance() as any
    const { $message } = ctx.root
    const dropzoneSuccess = (file: File, response: any) => {
      $message({ message: 'Upload success', type: 'success' })
      console.log(file, response)
    }
    const dropzoneRemovedFile = (file: File, error: Error, xhr: XMLHttpRequest) => {
      $message({ message: 'Delete success', type: 'success' })
      console.log(file, error, xhr)
    }
    return {
      dropzoneSuccess,
      dropzoneRemovedFile
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
