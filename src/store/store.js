import Vue from 'vue'
import Vuex from 'vuex'

// 引入home
import home from './home'
import login from './login'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    login
  }
})
