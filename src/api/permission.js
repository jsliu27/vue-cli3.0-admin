import axios from '@/http'

function fetchPermission () {
  return axios.get('/user/info')
}
// 登陆
function login (data) {
  return axios.post('/login', data)
}
export default {
  fetchPermission,
  login
}
