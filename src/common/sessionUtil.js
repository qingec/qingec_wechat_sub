// sessionStorage是在浏览器端存储数据的方法,可以在各个业务模块之间进行传值，但是只在页面期有效
// 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
/**
 string sessionStorage.key(int index) ：返回当前 sessionStorage 对象的第index序号的key名称。若没有返回null。
 string sessionStorage.getItem(string key) ：返回键名(key)对应的值(value)。若没有返回null。
 void sessionStorage.setItem(string key, string value) ：该方法接受一个键名(key)和值(value)作为参数，将键值对添加到存储中；如果键名存在，则更新其对应的值。
 void sessionStorage.removeItem(string key) ：将指定的键名(key)从 sessionStorage 对象中移除。
 void sessionStorage.clear() ：清除 sessionStorage 对象所有的项。
 */
export default {
  setSession: function(key,value){
    sessionStorage.setItem(key,value)
  },
  getSession: function(key){
    return sessionStorage.getItem(key)
  },
  delSession: function(key){
    sessionStorage.removeItem(key)
  },
  clearSession: function() {
    sessionStorage.clear()
  }

}
