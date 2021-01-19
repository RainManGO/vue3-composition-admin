<template>
  <div class="createPost-container">
    <el-form
      ref="postForm"
      :model="postForm"
      :rules="rules"
      class="form-container"
    >
      <!-- <Sticky
        :z-index="10"
        :class-name="'sub-navbar ' + postForm.status"
      >
        <CommentDropdown v-model="postForm.disableComment" />
        <PlatformDropdown v-model="postForm.platforms" />
        <SourceUrlDropdown v-model="postForm.sourceURL" />
        <el-button
          v-loading="loading"
          style="margin-left: 10px"
          type="success"
          @click="submitForm"
        >
          Publish
        </el-button>
        <el-button
          v-loading="loading"
          type="warning"
          @click="draftForm"
        >
          Draft
        </el-button>
      </Sticky> -->

      <div class="createPost-main-container">
        <el-row>
          <Warning />

          <el-col :span="24">
            <el-form-item
              style="margin-bottom: 40px"
              prop="title"
            >
              <!-- <MaterialInput
                v-model="postForm.title"
                :maxlength="100"
                name="name"
                required
              >
                Title
              </MaterialInput> -->
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-form-item
                    label-width="60px"
                    label="Author:"
                    class="postInfo-container-item"
                  >
                    <el-select
                      v-model="postForm.author"
                      :remote-method="getRemoteUserList"
                      filterable
                      default-first-option
                      remote
                      placeholder="Search user"
                    >
                      <el-option
                        v-for="(item, index) in userListOptions"
                        :key="item + index"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="10">
                  <el-form-item
                    label-width="120px"
                    label="Publish Time:"
                    class="postInfo-container-item"
                  >
                    <el-date-picker
                      v-model="timestamp"
                      type="datetime"
                      format="yyyy-MM-dd HH:mm:ss"
                      placeholder="Select date and time"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item
                    label-width="90px"
                    label="Importance:"
                    class="postInfo-container-item"
                  >
                    <el-rate
                      v-model="postForm.importance"
                      :max="3"
                      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                      :low-threshold="1"
                      :high-threshold="3"
                      style="display: inline-block"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item
          style="margin-bottom: 40px"
          label-width="70px"
          label="Summary:"
        >
          <el-input
            v-model="postForm.abstractContent"
            :rows="1"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
          />
          <span
            v-show="abstractContentLength"
            class="word-counter"
          >{{ abstractContentLength }}words</span>
        </el-form-item>

        <el-form-item
          prop="content"
          style="margin-bottom: 30px"
        >
          <!-- <Tinymce
            v-if="tinymceActive"
            ref="editor"
            v-model="postForm.fullContent"
            :height="400"
          /> -->
        </el-form-item>

        <el-form-item
          prop="imageURL"
          style="margin-bottom: 30px"
        >
          <UploadImage v-model="postForm.imageURL" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, defineComponent, onDeactivated, onActivated } from 'vue'
import { isValidURL } from '@/utils/validate'
import { getArticle, defaultArticleData } from '@/apis/articles'
import { getUsers } from '@/apis/user'
import { TagView } from '@/store/modules/tagsview/state'
// import MaterialInput from '@/components/MaterialInput/index.vue'
// import Sticky from '@/components/Sticky/index.vue'
// import Tinymce from '@/components/Tinymce/index.vue'
// import UploadImage from '@/components/UploadImage/index.vue'
import Warning from './Warning.vue'
// import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
// import { ElForm, ElMessage } from 'element-plus'
import { ElMessage } from 'element-plus'

import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'
import { TagsActionTypes } from '@/store/modules/tagsview/action-types'

export default defineComponent({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // CommentDropdown,
    // PlatformDropdown,
    // SourceUrlDropdown,
    // MaterialInput,
    // Sticky,
    // Tinymce,
    // UploadImage,
    Warning
  },

  setup(_, ctx) {
    console.log(ctx)
    const validateRequire = (rule: any, value: string, callback: Function) => {
      if (value === '') {
        if (rule.field === 'imageURL') {
          ElMessage.error({
            message: 'Upload cover image is required',
            type: 'error'
          })
        } else {
          ElMessage.error({
            message: rule.field + ' is required',
            type: 'error'
          })
        }
        callback(new Error(rule.field + ' is required'))
      } else {
        callback()
      }
    }
    const validateSourceUrl = (rule: any, value: string, callback: any) => {
      if (value) {
        if (isValidURL(value)) {
          callback()
        } else {
          ElMessage.error({
            message: 'Invalid URL',
            type: 'error'
          })
          callback(new Error('Invalid URL'))
        }
      } else {
        callback()
      }
    }
    const store = useStore()

    const tempTagView: TagView = {}
    const dataMap = reactive({
      router: useRouter(),
      route: useRoute(),
      postForm: Object.assign({}, defaultArticleData),
      loading: false,
      userListOptions: [],
      rules: {
        imageURL: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        fullContent: [{ validator: validateRequire }],
        sourceURL: [{ validator: validateSourceUrl, trigger: 'blur' }]
      },

      tinymceActive: true,
      abstractContentLength() {
        return this.postForm.abstractContent.length
      },
      lang() {
        return store.state.app.language
      },
      // set and get is useful when the data
      // returned by the backend api is different from the frontend
      // e.g.: backend return => "2013-06-25 06:59:25"
      //       frontend need timestamp => 1372114765000
      timestamp() {
        return (+new Date(this.postForm.timestamp))
      },
      timestamps(value: any) {
        this.postForm.timestamp = +new Date(value)
      }

    })

    const setPageTitle = (title: string) => {
      document.title = `${title} - ${dataMap.postForm.id}`
    }

    const setTagsViewTitle = (title: string) => {
      const tagView = tempTagView
      if (tagView) {
        tagView.title = `${title}-${dataMap.postForm.id}`
        // TagsViewModule.updateVisitedView(tagView)
        store.dispatch(TagsActionTypes.ACTION_UPDATE_VISITED_VIEW, tagView)
      }
    }
    const fetchData = async(id: any) => {
      try {
        const data = await getArticle(id, { /* Your params here */ })
        if (data) {
          dataMap.postForm = data?.data.article
        }
        // Just for test
        dataMap.postForm.title += `   Article Id:${dataMap.postForm.id}`
        dataMap.postForm.abstractContent += `   Article Id:${dataMap.postForm.id}`
        const title = dataMap.lang() === 'zh' ? '编辑文章' : 'Edit Article'
        // Set tagsview title
        setTagsViewTitle(title)
        // Set page title
        setPageTitle(title)
      } catch (err) {
        console.error(err)
      }
    }

    const submitForm = () => {
    //   (this.$refs.postForm as Form).validate(valid => {
    //     if (valid) {
    //       this.loading = true
    //       this.$notify({
    //         title: 'Success',
    //         message: 'The post published successfully',
    //         type: 'success',
    //         duration: 2000
    //       })
    //       this.postForm.status = 'published'
    //       // Just to simulate the time of the request
    //       setTimeout(() => {
    //         this.loading = false
    //       }, 0.5 * 1000)
    //     } else {
    //       console.error('Submit Error!')
    //       return false
    //     }
    //   })
    }

    const draftForm = () => {
      if (dataMap.postForm.fullContent.length === 0 || dataMap.postForm.title.length === 0) {
        ElMessage.warning({
          message: 'Title and detail content are required',
          type: 'warning'
        })
        return
      }
      ElMessage.success({
        message: 'The draft saved successfully',
        type: 'success',
        showClose: true,
        duration: 1000
      })
      dataMap.postForm.status = 'draft'
    }

    const getRemoteUserList = async(name: string) => {
      const data = await getUsers({ name })
      if (!data?.data.items) return
      dataMap.userListOptions = data.data.items.map((v: any) => v.name)
    }

    onDeactivated(() => {
      dataMap.tinymceActive = false
    })
    onActivated(() => {
      dataMap.tinymceActive = true
    })
    onMounted(() => {
      if (_.isEdit) {
        const id = dataMap.route.params && dataMap.route.params.id

        fetchData(id)
      }
      // Why need to make a copy of this.$route here?
      // Because if you enter this page and quickly switch tag, may be in the execution of this.setTagsViewTitle function, this.$route is no longer pointing to the current page
      // https://github.com/PanJiaChen/vue-element-admin/issues/1221
      // tempTagView = Object.assign({}, dataMap.route)
    })

    return { ...toRefs(dataMap), validateRequire, validateSourceUrl, fetchData, submitForm, setPageTitle, setTagsViewTitle, draftForm, getRemoteUserList }
  }
})

</script>

<style lang="scss">
.article-textarea {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>

<style lang="scss" scoped>
.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}
</style>
