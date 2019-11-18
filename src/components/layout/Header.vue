<template>
  <div id="header" class="header">
    <el-row>
      <el-col :span="1">
        <i @click="chengeNevMenu" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </el-col>
      <!-- <el-col :offset="10" :span="9">想放系统切换</el-col> -->
      <el-col :offset="19" :span="4">
        <el-row>
          <el-col :span="12">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col class="hr_befor" :span="12">
            <div class="hrf_avatarBox">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
            </div>
            <i class="el-icon-caret-bottom"></i>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      // 默认头像地址
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      // 切换语言的下拉框数据
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  methods: {
    // 改变侧边栏宽度
    chengeNevMenu () {
      this.$store.dispatch('changeCollapse')
    }
  },
  computed: {
    isCollapse (val) {
      return this.$store.state.home.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  i {
    font-size: 25px;
  }
  .hr_befor {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .hrf_avatarBox {
    height: 60px;
    padding-top: 5px;
    padding-right: 5px;
    padding: 5px 5px 5px 0;
    box-sizing: border-box;
  }
}
</style>
