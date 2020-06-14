<template>
  <div>
    <h1>hello webpack</h1>
    <Tab ref="reference" @getSon="getSon" :list="productList" />
    <p>父组件的Name:{{fromSon}}</p>
    <input type="text" :value="inputVal" @input="fuc">
    <p>{{inputVal}}</p>
    <DatePicker />
  </div>
</template>

<script>
import Tab from './component/tab'
import DatePicker from './component/datePicker'
export default {
  components: {
    Tab,
    DatePicker
  },
  data () {
    return {
      inputVal: 'please input name!',
      fromSon: '',
      productList: ['香皂', '水果', '拖鞋', '鞋刷子', '奶粉']
    }
  },
  methods: {
    getSon (val) {
      this.fromSon = val
    },
    fuc (event) {
      this.inputVal = event.target.value
    },
    mounted () {
      // console.log(reference)
    }
  }
}
</script>
<style>
</style>
