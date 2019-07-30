<template>
  <div id="app">
    <!--&lt;!&ndash;首页&ndash;&gt;-->
    <!--<router-link to="/home"></router-link>-->
    <!--&lt;!&ndash;个人中心&ndash;&gt;-->
    <!--<router-link to="/personalCenter"></router-link>-->
    <!--<router-link to="/personalCenter/recharge"></router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
