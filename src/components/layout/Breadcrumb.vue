<template>
    <div class="navbar clearfix">
        <el-breadcrumb
          class="breadcrumb-container"
          >
          <el-breadcrumb-item
            v-for="item in levelList"
            :key="item.path"
            :to="item.path"
            >
            <i :class="item.meta.icon"></i>
              {{item.meta.title}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      this.levelList = matched
    }
  }
}
</script>
