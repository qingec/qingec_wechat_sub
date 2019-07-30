<template>
  <!--手机号登录-->
  <div class="div_two div_margin">
    <!--&lt;!&ndash;<van-cell-group>&ndash;&gt;    error-message="手机号格式错误"-->
    <van-field  label="手机号" placeholder="请输入手机号" class="div_fied"></van-field>

    <van-field center clearable label="图片验证码" placeholder="请输入图片验证码" class="div_fied"></van-field>

    <van-field center clearable label="短信验证码" placeholder="请输入短信验证码" class="div_fied">
      <van-button slot="button" size="small" type="info">发送验证</van-button>
    </van-field>
    <!--</van-cell-group>-->

    <div class='login_btn_phone'>
      <van-button type="info" bind:click="to_login" class="div_body_button_login" size="normal">登录
      </van-button>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'register',
    data () {
      return {

      }
    },
    methods: {
      handler ({ BMap, map }) {}
    }
  }
</script>

<style scoped>
  .div_two{
    background-color: white;
  }
  .div_fied{
    padding-left: 20px;
    text-align: left;
    font-size: 15px;
  }


  .car_li_field input:first-child{
    text-align: left;
    height: 35px;
    line-height: 35px;
    display: inline-block;
  }

  van-cell>view:first-child{
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 10px;
  }

  van-icon>view:first-child{
    margin-right: 12px;

  }

  .div_margin{
    margin-top: 20px;
    /*padding-bottom: 10px;*/
  }

  .cellrow>view:first-child{
    margin-top: 5px;
  }


  van-cell{
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
  }

  .div_body_button_login{
    font-size: 20px;
    height: 6vh;
    line-height: 6vh;
    width: 90%;
    border-radius: 5px;
  }

  .login_btn_phone{
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .pile_info_view view{
    height:15px;
    line-height: 15px;
    margin-bottom: 3px;
  }

</style>


