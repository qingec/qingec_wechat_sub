<template>
  <!--注册登录-->
      <div class="div_two div_margin">
        <div class='login_btn'>
          <van-button type="primary" class="div_button_login" size="normal"
                      bind:getphonenumber="getPhoneNumber" open-type="getPhoneNumber">
            微信用户快速登录
          </van-button>
        </div>

        <div class='login_btn'>
          <van-button type="info" @click="to_register" class="div_button_login" size="normal">
            输入手机号注册登录
          </van-button>
        </div>
      </div>
</template>



<script>
  export default {
    name: 'login',
    data () {
      return {
      }
    },
    methods: {
      handler ({ BMap, map }) {},
      to_register(){
        this.$router.push("/register");
      }
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }

  .div_margin{
    margin-top: 20px;
    /*padding-bottom: 10px;*/
  }

  van-cell{
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
  }

  /*注册登录*/
  .login_btn{
    text-align: center;
  }
  .login_btn_phone{
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .div_button_login{
    font-size: 20px;
    height: 6vh;
    line-height: 6vh;
    width: 90%;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .pile_info_view view{
    height:15px;
    line-height: 15px;
    margin-bottom: 3px;
  }
</style>


