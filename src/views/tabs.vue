<template>
  <div id='tabs' class="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
      if (this.activeName === 'third') {
        this.$router.push('/home/tabs/add')
      } else {
        this.$router.push('/home/tabs')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.tabs {
}
</style>
