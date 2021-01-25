<template>
  <div>
    <input
      class="excel-upload-input inputNode"
      type="file"
      accept=".xlsx, .xls"
      @change="handleClick"
    >
    <div
      class="drop"
      @drop="handleDrop"
      @dragover="handleDragover"
      @dragenter="handleDragover"
    >
      Drop excel file here or
      <el-button
        :loading="loading"
        style="margin-left:16px;"
        size="mini"
        type="primary"
        @click="handleUpload"
      >
        Browse
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">

import { ElMessage } from 'element-plus'
import { reactive, defineComponent, toRefs } from 'vue'
import XLSX from 'xlsx'
export default defineComponent({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    beforeUpload: {
      type: Function
    },
    // eslint-disable-next-line vue/require-default-prop
    onSuccess: {
      type: Function
    }
  },
  setup(props) {
    const dataMap = reactive({
      loading: false,
      excelData: {
        header: null,
        results: null
      },
      generateData: (header: any, results: any) => {
        dataMap.excelData.header = header
        dataMap.excelData.results = results
        props.onSuccess && props.onSuccess(dataMap.excelData)
      },
      isExcel: (file: File) => /\.(xlsx|xls|csv)$/.test(file.name),
      upload: (rawFile: File) => {
        (document.querySelector('.inputNode') as HTMLInputElement).value = ''
        if (!props.beforeUpload) {
          dataMap.readerData(rawFile)
          return
        }
        const before = props.beforeUpload(rawFile)
        if (before) {
          dataMap.readerData(rawFile)
        }
      },
      handleDrop: (e: DragEvent) => {
        e.stopPropagation()
        e.preventDefault()
        if (dataMap.loading) return
        if (!e.dataTransfer) return
        const files = e.dataTransfer.files
        if (files.length !== 1) {
          ElMessage.error('Only support uploading one file!')
          return
        }
        const rawFile = files[0] // only use files[0]

        if (dataMap.isExcel(rawFile)) {
          ElMessage.error('Only supports upload .xlsx, .xls, .csv suffix files')
          return false
        }
        dataMap.upload(rawFile)
        e.stopPropagation()
        e.preventDefault()
      },
      handleDragover: (e: DragEvent) => {
        e.stopPropagation()
        e.preventDefault()
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'copy'
        }
      },
      handleUpload: () => {
        (document.querySelector('.inputNode') as HTMLInputElement).click()
      },
      getHeaderRow: (sheet: { [key: string ]: any }) => {
        const headers: string[] = []
        const range = XLSX.utils.decode_range(sheet['!ref'])
        const R = range.s.r
        // start in the first row
        for (let C = range.s.c; C <= range.e.c; ++C) { // walk every column in the range
          const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
          // find the cell in the first row
          let hdr = ''
          if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
          if (hdr === '') {
            hdr = 'UNKNOWN ' + C // replace with your desired default
          }
          headers.push(hdr)
        }
        return headers
      },
      readerData: (rawFile: File) => {
        dataMap.loading = true
        const reader = new FileReader()
        reader.onload = e => {
          debugger
          const data = (e.target as FileReader).result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = dataMap.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          dataMap.generateData(header, results)
          dataMap.loading = false
        }
        reader.readAsArrayBuffer(rawFile)
      },
      handleClick: (e: MouseEvent) => {
        const files = (e.target as HTMLInputElement).files
        if (files) {
          const rawFile = files[0] // only use files[0]
          dataMap.upload(rawFile)
        }
      }

    })

    return { ...toRefs(dataMap) }
  }
})
</script>

<style lang="scss" scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}

.drop {
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
</style>
