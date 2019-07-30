<template>
  <!--反馈信息-->
      <div class="div_two">
        <div class="feedback_msg_view">
          <textarea class='feedback_msg_area'  placeholder="聆听您的声音。" maxlength="512"/>
        </div>
        <div class="feedback_tishi_view">
          <van-field placeholder="请输联系方式" label="联系方式:"/>
        </div>

        <div class="feedback_photo_view">
          <div bindtap='open_photo' class='photo_img_view'>
            <img class='feedback_photo_img' :src='imgCamera'/>
          </div>
        </div>

        <div class="login_btn">
          <van-button type="info" class="div_button_login" size="normal">
            提交
          </van-button>
        </div>
      </div>
</template>



<script>
  export default {
    name: 'feedbackInfo',
    data () {
      return {
        imgCamera: require('../../../assets/img/xiangji.png'),
      }
    },
    methods: {}
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }

  /*反馈信息 相机*/
  .feedback_msg_area{
    height: 100px;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.026);
    border-color: rgba(0, 0, 0, 0.026);
    border-radius: 10px;
    margin:10px auto;
    font-size: 15px;
    padding: 10px;
  }

  .feedback_tishi_view{
    /*margin: 0px 10px;*/
    text-align: left;
    border-bottom: 1px solid  rgba(0, 0, 0, 0.26);
  }
  .feedback_photo_view{
    padding-bottom: 20px;
  }
  .photo_img_view{
    background-color: rgba(0, 0, 0, 0.050);
    width: 110px;
    height: 110px;
    margin: 10px;
    border-radius: 3px;
  }
  .feedback_photo_img{
    height: 100px;
    width: 100px;
    margin: 5px;
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


  .cellrow>view:first-child{
    margin-top: 5px;
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

