<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-13 21:28:05
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-21 17:21:09
-->
<template>
  <div class="components-container">
    <aside>
      <a
        href="https://github.com/PanJiaChen/vue-countTo"
        target="_blank"
      >
        countTo-component
      </a>
    </aside>
    <CountTo
      ref="count"
      :start-val="startVal"
      :end-val="endVal"
      :duration="duration"
      :decimals="decimals"
      :separator="separator"
      :prefix="prefix"
      :suffix="suffix"
      :autoplay="false"
      class="count"
    />
    <div style="margin-left: 25%; margin-top: 40px;">
      <label
        class="label"
        for="startValInput"
      >
        startVal:
        <input
          v-model.number="setStartVal"
          type="number"
          name="startValInput"
        >
      </label>
      <label
        class="label"
        for="endValInput"
      >
        endVal:
        <input
          v-model.number="setEndVal"
          type="number"
          name="endVaInput"
        >
      </label>
      <label
        class="label"
        for="durationInput"
      >
        duration:
        <input
          v-model.number="setDuration"
          type="number"
          name="durationInput"
        >
      </label>
      <div
        class="startBtn count-btn"
        @click="startCount"
      >
        Start
      </div>
      <div
        class="pause-resume-btn count-btn"
        @click="pauseResume"
      >
        pause/resume
      </div>
      <br>
      <label
        class="label"
        for="decimalsInput"
      >
        decimals:
        <input
          v-model.number="setDecimals"
          type="number"
          name="decimalsInput"
        >
      </label>
      <label
        class="label"
        for="separatorInput"
      >
        separator:
        <input
          v-model="setSeparator"
          name="separatorInput"
        >
      </label>
      <label
        class="label"
        for="prefixInput"
      >
        prefix:
        <input
          v-model="setPrefix"
          name="prefixInput"
        >
      </label>
      <label
        class="label"
        for="suffixInput"
      >
        suffix:
        <input
          v-model="setSuffix"
          name="suffixInput"
        >
      </label>
    </div>
    <aside>
      &lt;count-to :start-val=&#x27;{{ startVal }}&#x27; :end-val=&#x27;{{ endVal }}&#x27; :duration=&#x27;{{ duration }}&#x27;
      :decimals=&#x27;{{ decimals }}&#x27; :separator=&#x27;{{ separator }}&#x27; :prefix=&#x27;{{ prefix }}&#x27; :suffix=&#x27;{{ suffix }}&#x27;
      :autoplay=false&gt;
    </aside>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, reactive, ref, toRefs } from 'vue'
import { CountTo } from 'vue3-count-to'

export default defineComponent({
  components: {
    CountTo
  },
  setup() {
    const { ctx } = getCurrentInstance() as any
    const state = reactive({
      setStartVal: 0,
      setEndVal: 2017,
      setDuration: 4000,
      setDecimals: 0,
      setSeparator: '',
      setSuffix: ' rmb',
      setPrefix: '¥ '
    })
    const stateAsRefs = toRefs(state)
    const startVal = computed(() => {
      if (state.setStartVal) {
        return state.setStartVal
      } else {
        return 0
      }
    })
    const endVal = computed(() => {
      if (state.setEndVal) {
        return state.setEndVal
      } else {
        return 0
      }
    })
    const duration = computed(() => {
      if (state.setDuration) {
        return state.setDuration
      } else {
        return 0
      }
    })
    const decimals = computed(() => {
      if (state.setDecimals) {
        if (state.setDecimals < 0 || state.setDecimals > 20) {
          alert('digits argument must be between 0 and 20')
          return 0
        }
        return state.setDecimals
      } else {
        return 0
      }
    })
    const separator = computed(() => {
      return state.setSeparator
    })
    const suffix = computed(() => {
      return state.setSuffix
    })
    const prefix = computed(() => {
      return state.setPrefix
    })
    const countRef = ref(null)
    const startCount = () => {
      console.log(ctx.$refs)
      // ctx.$refs.count && (ctx.$refs.count as any).start()
    }
    const pauseResume = () => {
      // countRef.value && (countRef.value as any).pauseResume()
    }
    return {
      startVal,
      endVal,
      duration,
      decimals,
      separator,
      suffix,
      prefix,
      countRef,
      startCount,
      pauseResume,
      ...state,
      ...stateAsRefs
    }
  }
})
</script>

<style lang="scss" scoped>
.count {
  font-size: 50px;
  color: #f6416c;
  display: block;
  margin: 10px 0;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
}

.count-btn {
  display: inline-block;
  margin: 10px 0;
  font-weight: 500;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  padding: 2px 15px;
  font-size: 12px;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;

  &:hover {
    color: #4ab7bd;
    background-color: #fff;
    border-color: #4ab7bd;
  }
}

.label {
  color: #2f4f4f;
  font-size: 16px;
  display: inline-block;
  margin: 15px 30px 15px 0;
}

input {
  position: relative;
  display: inline-block;
  padding: 4px 7px;
  width: 70px;
  height: 28px;
  cursor: text;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.startBtn {
  margin-right: 10px;
  font-size: 20px;
  color: #30b08f;
  background-color: #fff;

  &:hover {
    background-color: #30b08f;
    color: #fff;
    border-color: #30b08f;
  }
}

.pause-resume-btn {
  font-size: 20px;
  color: #e65d6e;
  background-color: #fff;

  &:hover {
    background-color: #e65d6e;
    color: #fff;
    border-color: #e65d6e;
  }
}
</style>
