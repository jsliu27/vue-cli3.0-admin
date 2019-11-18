//  引入axios
import axios from 'axios'
import router from '@/router/router'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c74e35876337f793d553e2f/manage'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 一般在这个位置判断token是否存在
    //   if (store.state.token) {
    //     config.headers.Authorization = `token ${store.state.token}`
    //   }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT)
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: 'login',
              query: {
                redirect: router.currentRoute.path
              }
            })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

export default axios
