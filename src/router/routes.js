import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import Table from '@/views/Table'
import tableChild from '@/views/tableChild'
import Register from '@/views/Register'
// 创建路由
const routes = [{
  path: '/',
  name: 'root',
  // 重定向
  redirect: '/login'
},
{
  path: '',
  name: 'login',
  // 重定向
  redirect: '/login'
},
// 登陆页
{
  path: '/login',
  name: 'login',
  component: Login
},
// 注册页
{
  path: '/register',
  name: 'register',
  component: Register
},
// 首页
{
  path: '/home',
  name: 'home',
  component: Home,
  meta: {
    title: '首页',
    icon: 'el-icon-s-home'
  },
  children: [{
    // 当 /home/profile 匹配成功，
    // UserProfile 会被渲染在 User 的 <router-view> 中
    path: 'profile',
    name: 'profile',
    component: Login,
    meta: {
      title: 'profile',
      icon: 'el-icon-s-home'
    }
  },
  {
    // 当 /home/posts 匹配成功(没有meta不会有面包屑)
    // UserPosts 会被渲染在 User 的 <router-view> 中
    path: 'posts',
    component: Login
  }
  ]
},
// 表格
{
  path: '/table',
  component: Table
},
// 表格带子类表格
{
  path: '/tableChild',
  component: tableChild
},
{
  path: '*',
  name: 'root',
  // 重定向
  component: Login
}
]

export default routes
