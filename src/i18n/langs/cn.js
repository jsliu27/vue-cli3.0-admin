// 引入elementui的时候需要加上
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
  message: {
    loginPage: {
      login: '登陆',
      register: '注册',
      userName: '用户名',
      password: '密码'
    },
    rule: {
      name: '请输入用户名',
      pwd: '请输入密码'
    },
    alert: {
      langChangeSuccess: '语言切换成功'
    }
  },
  // 引入elementui的时候需要加上
  ...zhLocale
}

export default cn
