<template>
  <div class="add">
    aaaaaaaaaaaaaaddddddddddddddddddddddddddddddd
    <el-button type="primary" @click="add">添加</el-button>
  </div>
</template>
<script>
export default {
  name: 'Add',
  methods: {
    add () {
      this.$router.push('/home/tabs/return')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
