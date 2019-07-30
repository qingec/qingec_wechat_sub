// import Vue from 'vue'
// import Router from 'vue-router'
// // import HelloWorld from '@/components/HelloWorld'
// import Home from '@/module/home/page/home'
// import PersonalCenter from '@/module/personalCenter/page/personalManage'
// import Recharge from '@/module/personalCenter/page/recharge'
// import Setting from '@/module/personalCenter/page/setting'
// import axios from 'axios'
//
// Vue.use(Router)
// Vue.prototype.$axios = axios
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/personalCenter',
//       name: 'personalCenter',
//       component: PersonalCenter,
//       // redirect: '/personalCenter/recharge',
//       children: [
//         {
//           path: '/personalCenter/recharge',
//           name: 'recharge',
//           component: Recharge
//         }
//       ]
//     }
//     // ,{
//     //   path: '/recharge',
//     //   name: 'Recharge',
//     //   component: Recharge
//     // }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 定义路由配置
let routes = []

let concat = (router) => {
  routes = routes.concat(router)
}

//导入路由规则 ，进行路由的测试
import home from '@/module/home/router'
concat(home)
import Login from '@/module/login/router'
concat(Login)
import PersonalCenter from '@/module/personalCenter/router'
concat(PersonalCenter)
import StationManage from '@/module/stationManage/router'
concat(StationManage)
import HistoryManage from '@/module/historyManage/router'
concat(HistoryManage)
import CollectManage from '@/module/collectManage/router'
concat(CollectManage)
import ChargingManage from '@/module/chargingManage/router'
concat(ChargingManage)


export default routes
