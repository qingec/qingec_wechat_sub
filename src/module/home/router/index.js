import Home from '@/module/home/page/home.vue'

// 导出配置的路由器
export default[{
  path: '/',
  component: Home,
  name: '首页',
  hidden: true
}
]

// import Vue from 'vue'
// import Router from 'vue-router'
// // import HelloWorld from '@/components/HelloWorld'
// import Home from '@/module/home/page/home'
// import axios from 'axios'
//
// Vue.use(Router)
// Vue.prototype.$axios = axios
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/personalCenter',
//       name: 'PersonalCenter',
//       component: PersonalCenter
//     }
//   ]
// })
