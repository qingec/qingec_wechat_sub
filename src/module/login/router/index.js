import Login from '@/module/login/page/login.vue'
import Register from '@/module/login/page/register.vue'

// 导出配置的路由器
export default[{
  path: '/login',
  component: Login,
  name: '登录',
  hidden: true
},
  {
    path: '/register',
    component: Register,
    name: '注册',
  }
]
