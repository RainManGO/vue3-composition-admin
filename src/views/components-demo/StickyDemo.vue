<template>
  <div>
    <Sticky
      :z-index="10"
      class-name="sub-navbar"
    >
      <el-dropdown trigger="click">
        <el-button plain>
          Platform<i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu
            class="no-border"
          >
            <el-checkbox-group
              v-model="platforms"
              style="padding: 5px 15px"
            >
              <el-checkbox
                v-for="item in platformsOptions"
                :key="item.key"
                :label="item.key"
              >
                {{ item.name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          Link<i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu
            class="no-padding no-border"
            style="width: 300px"
          >
            <el-input
              v-model="url"
              placeholder="Please enter the content"
            >
              URL
            </el-input>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div class="time-container">
        <el-date-picker
          :value="time"
          type="datetime"
          format="yyyy-MM-dd HH:mm:ss"
          placeholder="Release time"
          :picker-options="pickerOptions"
        />
      </div>
      <el-button
        style="margin-left: 10px"
        type="success"
      >
        publish
      </el-button>
    </Sticky>
    <div class="components-container">
      <aside>Sticky header, {{ t("components.stickyTips") }}</aside>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <Sticky :sticky-top="200">
        <el-button type="primary">
          placeholder
        </el-button>
      </Sticky>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Sticky from '@/components/sticky/Index.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    Sticky
  },
  setup() {
    const { t } = useI18n()
    const state = reactive({
      time: Date,
      url: '',
      platforms: ['a-platform'],
      platformsOptions: [
        { key: 'a-platform', name: 'platformA' },
        { key: 'b-platform', name: 'platformB' },
        { key: 'c-platform', name: 'platformC' }
      ],
      pickerOptions: {
        disabledDate(time: Date) {
          return time.getTime() > Date.now()
        }
      }
    })
    return {
      t,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}
</style>
