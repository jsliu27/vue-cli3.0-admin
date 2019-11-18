<template>
  <div class="loginBox">
    <!-- 中英文切换 -->
    <div class="langBox">
      <span
        :class="lang == 'cn' ? 'active' : ''"
        @click="changeLang('cn')"
        >
        cn
      </span>
      |
      <span
        :class="lang == 'en' ? 'active' : ''"
        @click="changeLang('en')"
        >
        en
      </span>
    </div>
    <!-- 登陆窗 -->
    <div id="login" class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        >
        <el-form-item :label="$t('message.loginPage.userName')" prop="name" required>
          <el-input type="text" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.loginPage.password')" prop="pwd" required>
          <el-input type="password" v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">{{$t('message.loginPage.login')}}</el-button>
          <el-button @click="resetForm">{{$t('message.loginPage.register')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>
<script>
// import API from '@/api/permission'
export default {
  data () {
    return {
      lang: 'cn',
      ruleForm: {
        name: '',
        pwd: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        name: [
          {
            required: true,
            message: this.$t('message.rule.name'),
            trigger: 'blue'
          }
        ],
        password: [
          {
            required: true,
            message: this.$t('message.rule.pwd'),
            trigger: 'blue'
          }
        ]
      }
    }
  },
  methods: {
    // 切换语言
    changeLang (lang) {
      this.lang = lang
      this.$i18n.locale = lang
      this.$message({
        message: this.$t('message.alert.langChangeSuccess'),
        type: 'success'
      })
    },
    submitForm () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // API.login(this.ruleForm).then(result => {
          //   if (result.data.success) {
          //     this.$router.push('/home')
          //   } else {
          //     this.$message('用户名或密码错误')
          //   }
          // }).catch(error => {
          //   console.log(error)
          // })
          this.$router.push('/home')
        } else {
          this.$message('用户名和密码不能为空')
          return false
        }
      })
    },
    resetForm () {
      this.$router.push('./register')
    }
  }
}
</script>
<style lang="less" scoped>
.loginBox {
  width: 100%;
  height: 100%;
  background: url(../static/login/login.png);
  overflow: hidden;
  position: relative;
  .langBox {
    cursor: pointer;
    color: #000;
    position: absolute;
    top: 10px;
    right: 20px;
    .active {
      color: #fff;
    }
  }
  .login {
  width: 400px;
  margin-top: 200px;
  margin-left: 800px;
  margin-right: 30px;
  padding: 25px 30px 1px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  border-radius: 10px;
}
}

</style>
