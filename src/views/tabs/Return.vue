<template>
  <div class="return">
    <el-button type="primary" @click="returnHandle">返回</el-button>
    return returnreturnreturnreturnreturnreturnreturn
  </div>
</template>
<script>
export default {
  name: 'Return',
  methods: {
    returnHandle () {
      this.$router.push('/home/tabs/add')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
