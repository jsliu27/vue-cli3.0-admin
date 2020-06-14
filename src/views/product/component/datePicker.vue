<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      size="small"
      type="datetimerange"
      range-separator="-"
      start-placeholder="开始日期"
      :picker-options="pickerOptions"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data () {
    let _minDate = ''
    // let _maxDate = ''
    return {
      value1: ['', ''],
      pickerOptions: {
        disabledDate (val) {
          let tag1 = new Date(_minDate).getTime() + 60 * 60 * 24 * 1000 * 2 < new Date(val).getTime()
          // let tag2 = new Date(_minDate).getTime() - 60 * 60 * 24 * 1000 * 2 > new Date(val).getTime()
          console.log(tag1)
          // console.log(new Date(val).getTime())
          return new Date(_minDate).getTime() + 60 * 60 * 24 * 1000 * 2 < new Date(val).getTime() || new Date(_minDate).getTime() - 60 * 60 * 24 * 1000 * 2 > new Date(val).getTime()
        },
        onPick ({ maxDate, minDate }) {
          console.log(maxDate, minDate)
          _minDate = minDate
          // _maxDate = maxDate;
        }
      }
    }
  }
}
</script>
<style>
</style>
