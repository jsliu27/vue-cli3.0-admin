// 引入elementui的时候需要加上
import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  message: {
    loginPage: {
      login: 'login',
      register: 'register',
      userName: 'userName',
      password: 'password'
    },
    rule: {
      name: 'userName is required',
      nwd: 'password is required'
    },
    alert: {
      langChangeSuccess: 'switch language success'
    }
  },
  // 引入elementui的时候需要加上
  ...enLocale
}

export default en
