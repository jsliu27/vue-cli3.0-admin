import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import i18n from './i18n/i18n'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/base.less'
Vue.config.productionTip = false
Vue.use(ElementUI)
// console.log(axios)

Vue.use(axios)
new Vue({
  router,
  store,
  i18n,
  // axios,
  render: h => h(App)
}).$mount('#app')
