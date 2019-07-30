// 每个cookie都是一个key/value队

export default {
  /**
   * 用于设置cookie
   * @param name cookieName
   * @param value cookieValue
   * @param expiredays  设置cookie的过期时间，如果expiredays为0或为null，则说明不设置过期时间，即浏览器关闭时自动消失
   */
  setCookie: function (name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) + ((expiredays === 0 || expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },
  /**
   * 获取指定名称的cookie值
   * 由于保存cookie时使用的分割符
   * @param name :cookie名
   */
  getCookie: function (name) {
    /* var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0 ; i < arrCookie.length ; i++){
      var arr = arrCookie[i].split("=");
      if(arr[0] == name)
        return arr[1];
    }
    return ""; */
    var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr = document.cookie.match(reg)) {
      return (arr[2])
    } else {
      return null
    }
  },
  /**
   * 删除指定的cookie  为了删除指定的cookie，可以将过期时间设置为一个过去的时间
   * @param name
   */
  delCookie: function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=" + "" + ";expires=" + exp.toGMTString();
  }
}
