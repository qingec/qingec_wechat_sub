// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入百度地图
import BaiduMap from 'vue-baidu-map'
import Vant from 'vant'
import 'vant/lib/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import routes from './router'

// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false

// 在全局Vue中进行使用 使用use命令后才起作用
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vant)
// 百度地图
Vue.use(BaiduMap, {ak: 'apVgGeyuozEHouxjbG0jMATum0QuUQpE'})
//主要用来发送请求，可理解为ajax
Vue.use(axios)
Vue.use(Vuex)

const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
  },
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
