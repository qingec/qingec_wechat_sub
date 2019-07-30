/* 使es6支持promise */
require('es6-promise').polyfill()
/* 导入axios */
import axios from 'axios'

// 一些请求的全局配置,具体见文档http://www.axios-js.com/zh-cn/docs/index.html#axios-get-url-config
//表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
//如果请求超过timeout时间则会被中断
axios.defaults.timeout = 1000
//post请求的编码方式
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
//动态添加请求头的Authorization，

//配置请求之前进行拦截，如可以增加Authorization
// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

//封装请求
export  default{
  //get请求
  requestGet(url,params = {}){
    return new Promise((resolve,reject) =>{
      axios.get(url,params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
//get请求不带参数
  requestQuickGet (url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //post请求
  requestPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //post请求
  requestPostForm (url, params = {}) {
    return new Promise((resolve, reject) => {
      console.log('url'+ url + 'params:' + JSON.stringify(params))
      axios.post(url, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res => {
        resolve(res.data)//注意res是axios封装的对象，res.data才是服务端返回的信息
      }).catch(error => {
        reject(error)
      })
    })
  },
  //put请求
  requestPut (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //delete请求
  requestDelete (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}



