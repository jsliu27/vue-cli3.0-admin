<template>
  <div id="home" class="home">
    <el-container>
      <el-aside width="min-content">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Breadcrumb />
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layout/Header'
import NavMenu from '@/components/layout/NavMenu'
import Breadcrumb from '@/components/layout/Breadcrumb'
export default {
  name: 'home',
  components: {
    Header,
    NavMenu,
    Breadcrumb
  }
}
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
