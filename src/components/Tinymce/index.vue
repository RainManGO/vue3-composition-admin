<template>
  <div
    :class="{fullscreen: fullscreen}"
    class="tinymce-container"
    :style="{width: containerWidth}"
  >
    <TinymceEditor
      :id="id"
      v-model:value="tinymceContent"
      :init="initOptions"
    />
    <div class="editor-custom-btn-container">
      <EditorImageUpload
        :color="uploadButtonColor"
        class="editor-upload-btn"
        @success-callback="imageSuccessCBK"
      />
    </div>
  </div>
</template>

<script lang="ts">
// Docs: https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/
// Import TinyMCE
import 'tinymce'
// Default icons are required for TinyMCE 5.3 or above
import 'tinymce/icons/default'
// Import themes
import 'tinymce/themes/silver'
import 'tinymce/themes/mobile'
// Any plugins you want to use has to be imported
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/fullpage'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/help'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/image'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/noneditable'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/print'
import 'tinymce/plugins/save'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/tabfocus'
import 'tinymce/plugins/table'
import 'tinymce/plugins/template'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/wordcount'
import TinymceEditor from '@tinymce/tinymce-vue' // TinyMCE vue wrapper
import EditorImageUpload, { UploadObject } from './components/EditorImage.vue'
import { plugins, toolbar } from './config'
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  nextTick,
  ref,
  computed
} from 'vue'
import { useStore } from '@/store'
const defaultId = () =>
  'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
export default defineComponent({
  components: {
    TinymceEditor,
    EditorImageUpload
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: defaultId
    },
    toolbar: {
      type: Array,
      default: () => {
        return []
      }
    },
    menubar: {
      type: String,
      default: 'file edit insert view format table'
    },
    height: {
      type: String || Number,
      default: '360px'
    },
    width: {
      type: String || Number,
      default: 'auto'
    }
  },
  emits: ['input'],
  setup(props, ctx) {
    const store = useStore()
    const dataMap = reactive({
      hasChange: false,
      hasInit: false,
      fullscreen: true,
      getlanguage: () => {
        return store.state.app.language
      },
      uploadButtonColor: () => {
        return store.state.settings.theme
      },
      tinymceContent: computed(() => {
        return props.value
      }),
      containerWidth: () => {
        const width = props.width
        // Test matches `100`, `'100'`
        if (/^[\d]+(\.[\d]+)?$/.test(width.toString())) {
          return `${width}px`
        }
        return width
      }
    })

    const initOptions = ref(
      {
        selector: `#${props.id}`,
        height: props.height,
        // eslint-disable-next-line @typescript-eslint/camelcase
        body_class: 'panel-body',
        // eslint-disable-next-line @typescript-eslint/camelcase
        object_resizing: false,
        toolbar: props.toolbar.length > 0 ? props.toolbar : toolbar,
        menubar: props.menubar,
        plugins: plugins,
        // eslint-disable-next-line @typescript-eslint/camelcase
        language_url: store.state.app.language === 'en' ? '' : `${process.env.BASE_URL}tinymce/langs/${store.state.app.language}.js`,
        language: 'zh_CN',
        // eslint-disable-next-line @typescript-eslint/camelcase
        // eslint-disable-next-line @typescript-eslint/camelcase
        skin_url: `${process.env.BASE_URL}tinymce/skins/`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        emoticons_database_url: `${process.env.BASE_URL}tinymce/emojis.min.js`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        end_container_on_empty_block: true,
        // eslint-disable-next-line @typescript-eslint/camelcase
        powerpaste_word_import: 'clean',
        // eslint-disable-next-line @typescript-eslint/camelcase
        code_dialog_height: 450,
        // eslint-disable-next-line @typescript-eslint/camelcase
        code_dialog_width: 1000,
        // eslint-disable-next-line @typescript-eslint/camelcase
        advlist_bullet_styles: 'square',
        // eslint-disable-next-line @typescript-eslint/camelcase
        advlist_number_styles: 'default',
        // eslint-disable-next-line @typescript-eslint/camelcase
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        // eslint-disable-next-line @typescript-eslint/camelcase
        default_link_target: '_blank',
        // eslint-disable-next-line @typescript-eslint/camelcase
        link_title: false,
        // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        // eslint-disable-next-line @typescript-eslint/camelcase
        nonbreaking_force_tab: true,
        // https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/
        // https://stackoverflow.com/questions/5196205/disable-tinymce-absolute-to-relative-url-conversions
        // eslint-disable-next-line @typescript-eslint/camelcase
        convert_urls: false,
        // eslint-disable-next-line @typescript-eslint/camelcase
        init_instance_callback: (editor: any) => {
          if (props.value) {
            editor.setContent(props.value)
          }
          dataMap.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            dataMap.hasChange = true
            ctx.emit('input', editor.getContent())
          })
        },
        setup: (editor: any) => {
          editor.on('FullscreenStateChanged', (e: any) => {
            dataMap.fullscreen = e.state
          })
        }
      }
    )

    watch(() => store.state.app.language, () => {
      const tinymceManager = (window as any).tinymce
      const tinymceInstance = tinymceManager.get(props.id)
      if (dataMap.fullscreen) {
        tinymceInstance.execCommand('mceFullScreen')
      }
      if (tinymceInstance) {
        tinymceInstance.destroy()
      }
      nextTick(() => {
        tinymceManager.init(initOptions)
      })
    })

    watch(() => dataMap.tinymceContent, (value) => {
      console.log(value)
    })

    const imageSuccessCBK = (arr: UploadObject[]) => {
      const tinymce = (window as any).tinymce.get(props.id)
      arr.forEach((v) => {
        tinymce.insertContent(`<img class="wscnph" src="${v.url}" >`)
      })
    }
    return { ...toRefs(dataMap), imageSuccessCBK, initOptions }
  }
})
</script>

<style lang="scss" scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
  .mce-fullscreen {
    z-index: 10000;
  }
}
.editor-custom-btn-container {
  position: absolute !important;
  right: 6px;
  top: 6px;
  z-index: 1002;
}
.editor-upload-btn {
  display: inline-block;
}
textarea {
  visibility: hidden;
  z-index: -1;
}
</style>
