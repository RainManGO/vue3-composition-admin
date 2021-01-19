<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-13 21:30:42
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-19 18:16:24
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
import { computed, defineComponent, getCurrentInstance, watch } from 'vue'
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
  setup(props) {
    const { ctx } = getCurrentInstance() as any
    const languageTypeList: { [key: string]: string } = {
      en: 'en',
      zh: 'zh'
    }
    const show = computed(() => {
      return props.value
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch(() => show, (value) => {
      ctx.emit('input', props.value)
    })
    const language = computed(() => {
      return languageTypeList[AppModule.language]
    })
    const srcFileSet = (fileName: string, fileType: string, fileSize: number) => {
      ctx.emit('src-file-set', fileName, fileType, fileSize)
    }
    const cropSuccess = (imgDataUrl: string, field: string) => {
      ctx.emit('crop-success', imgDataUrl, field)
    }
    const cropUploadSuccess = (jsonData: any, field: string) => {
      ctx.emit('crop-upload-success', jsonData, field)
    }
    const cropUploadFail = (status: boolean, field: string) => {
      ctx.emit('crop-upload-fail', status, field)
    }
    return {
      show,
      language,
      srcFileSet,
      cropSuccess,
      cropUploadSuccess,
      cropUploadFail
    }
  }
})
</script>

<style scoped>

</style>
