<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-18 17:28:28
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-19 17:29:52
-->
<template>
  <div>
    <VueDropzone
      :id="id"
      :options="dropzoneOptions"
      :use-custom-slot="true"
      @vdropzone-removed-file="dropzoneRemovedFile"
      @vdropzone-success="dropzoneSuccess"
    >
      <div class="dropzone-custom-content">
        <h3
          class="dropzone-custom-title"
          :style="{color: themeColor}"
        >
          Drag and drop to upload content!
        </h3>
        <div class="subtitle">
          ...or click to select a file from your computer
        </div>
      </div>
    </VueDropzone>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { VueDropzone } from '@dragndrop/vue-dropzone'

export default defineComponent({
  components: {
    VueDropzone
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
.dropzone-custom-content {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.subtitle {
  color: #314b5f;
}

.dropzone {
  min-height: 250px;
}
</style>
