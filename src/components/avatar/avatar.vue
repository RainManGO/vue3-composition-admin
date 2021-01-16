<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-13 21:30:42
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-16 17:06:14
-->
<template>
  <ImageCropUpload
    v-model="show"
    :field="field"
    :url="url"
    :width="width"
    :height="height"
    :params="params"
    :headers="headers"
    :with-credentials="true"
    img-format="png"
    @src-file-set="srcFileSet"
    @crop-success="cropSuccess"
    @crop-upload-success="cropUploadSuccess"
    @crop-upload-fail="cropUploadFail"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageCropUpload from 'vue-image-crop-upload'
import { AppModule } from '@/store/modules/app/app'

export default defineComponent({
  components: {
    ImageCropUpload
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default!: ''
    },
    field: {
      type: String,
      default!: ''
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    params: {
      type: Object,
      default: () => null
    },
    headers: {
      type: Object,
      default: () => null
    }
  },
  emits: ['src-file-set', 'crop-success', 'crop-upload-success', 'crop-upload-fail', 'input'],
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const languageTypeList: { [key: string]: string } = {
      en: 'en',
      zh: 'zh'
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function language(this: any) {
      return this.languageTypeList[AppModule.language]
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function show(this: any, value: undefined) {
      this.$emit('input', value)
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function srcFileSet(this: any, fileName: string, fileType: string, fileSize: number) {
      this.$emit('src-file-set', fileName, fileType, fileSize)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function cropSuccess(this: any, imgDataUrl: string, field: string) {
      this.$emit('crop-success', imgDataUrl, field)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function cropUploadSuccess(this: any, jsonData: any, field: string) {
      this.$emit('crop-upload-success', jsonData, field)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function cropUploadFail(this: any, status: boolean, field: string) {
      this.$emit('crop-upload-fail', status, field)
    }
  }
})
</script>

<style scoped>

</style>
