import Vue from 'vue'
// 引入elementui的时候需要加上
import DatePicker from 'element-ui/lib/date-picker'
import ElementLocale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import messages from './langs'

Vue.use(VueI18n)
Vue.use(DatePicker)
const i18n = new VueI18n({
  locale: localStorage.lang || 'cn',
  messages
})
// 引入elementui的时候需要加上
ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n
