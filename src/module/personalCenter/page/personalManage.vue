<template>
  <!--个人中心模块-->
  <el-row>
    <el-col :span="24">
      <div class="div_two">
        <el-row class='user_div'>
          <div class='user_head'>
            <img class='user_bg' :src='imgBackgroud'/>
            <div class='user_service' @click="customerClick">
              <img bindtap='to_servicecenter' class='user_service_img' :src='imgService'/>
              <span bindtap='to_servicecenter' class="user_service_text">客服</span>
            </div>

            <div class='user_set' @click="setClick">
              <img bindtap='to_setting'  class='user_set_img' :src='imgSet'/>
              <span  bindtap='to_setting'  class="user_set_text">设置</span>
            </div>

            <div class='user_portrait'>
              <div class='user_portrait_img'></div>
              <span class="user_portrait_text">号码</span>
            </div>
          </div>
        </el-row>
        <el-row class='user_div'>
          <el-row class='div_title'>
            我的钱包
          </el-row>
          <el-row>
            <!--<navigator url="/personalCenter/page/recharge">-->
            <div class='div_body'>
              <el-col :span="8" class="div_body_out_border">
                <el-row class="div_body_text_1">余额</el-row>
                <el-row class="div_body_text_2">元</el-row>
                <el-row class="div_body_button_1">
                  <!--<router-link to="/personalCenter/recharge">-->
                    <van-button  @click='recharge'  type="info" size="mini" class='div_body_button_charge'>充值
                    </van-button>
                  <!--</router-link>-->
                </el-row>
              </el-col>
            </div>
            <!--</navigator>-->

            <!--<navigator url="/pages/chargeCard/chargeCard">-->
            <div class='div_body' @click="cardClick">
              <el-col :span="8"  class="div_body_out_border">
                <el-row class="div_body_text_1">充电卡</el-row>
                <el-row class="div_body_text_2">张</el-row>
                <el-row class="div_body_text_3">张即将过期</el-row>
              </el-col>
            </div>
            <!--</navigator>-->

            <div class='div_body'>
              <el-col :span="8">
                <el-row class="div_body_text_1">积分</el-row>
                <el-row class="div_body_text_2">分</el-row>
                <el-row class="div_body_text_3">查看详情</el-row>
              </el-col>
            </div>
          </el-row>
        </el-row>
        <el-row class='user_div'>
          <el-row class='div_title'>
            我的充电
          </el-row>

          <el-row>
            <!--<navigator url="/pages/order/order">-->
            <div class='div_body'  @click="orderClick">
              <el-col :span="8"  class="div_body_out_border">
                <el-row class="div_body_image_1">
                  <img class='user_icon'  :src='imgOrder'/>
                </el-row>
                <el-row class=" div_body_text_1 ">我的订单</el-row>
              </el-col>
            </div>
            <!--</navigator>-->

            <!--<navigator url="/pages/car/car">-->
            <div class='div_body'  @click="addCarClick">
              <el-col :span="8"  class="div_body_out_border">
                <el-row class="div_body_image_1">
                  <img class='user_icon'  :src='imgLoveCar'/>
                </el-row>
                <el-row class="div_body_text_1">我的爱车</el-row>
              </el-col>
            </div>
            <!--</navigator>-->

            <!--<navigator url="/pages/collection/collection">-->
            <div class='div_body'  @click="collectionClick">
              <el-col :span="8">
                <el-row class="div_body_image_1">
                  <img class='user_icon' :src='imgCollection'/>
                </el-row>
                <el-row class="div_body_text_1">我的收藏</el-row>
              </el-col>
            </div>
            <!--</navigator>-->
          </el-row>
        </el-row>

        <el-row class='user_div'>
          <el-row class='div_title'>
            我的社区
          </el-row>
          <el-row>

            <!--<navigator url="/pages/comment/comment">-->
            <div class='div_body'  @click="commentClick">
              <el-col :span="8"  class="div_body_out_border">
                <el-row class="div_body_image_1">
                  <img class='user_icon' :src='imgComment'/>
                </el-row>
                <el-row class=" div_body_text_1 ">我的评论</el-row>
              </el-col>
            </div>
            <!--</navigator>-->

            <!--<navigator url="/pages/feedback/feedback">-->
            <div class='div_body'  @click="feedbackClick">
              <el-col :span="8"  class="div_body_out_border">
                <el-row class="div_body_image_1">
                  <img class='user_icon' :src='imgFeedBack'/>
                </el-row>
                <el-row class="div_body_text_1">我的反馈</el-row>
              </el-col>
            </div>
            <!--</navigator>-->

            <!--<navigator url="/pages/questions/questions">-->
            <div class='div_body'  @click="questionClick">
              <el-col :span="8">
                <el-row class="div_body_image_1">
                  <img class='user_icon' :src='imgQuestion'/>
                </el-row>
                <el-row class=" div_body_text_1 ">我的问答</el-row>
              </el-col>
            </div>
            <!--</navigator>-->
          </el-row>
        </el-row>
        <el-row class="user_div_login">
          <el-col :span="24" class="div_body_login">
            <van-button type="info" @click="to_login" size="normal" class='div_body_button_login'>注册/登录</van-button>
          </el-col>
        </el-row>
      </div>
      <router-view :key="$route.fullPath"></router-view>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'personalManage',
    data () {
      return {
        imgBackgroud: require('../../../assets/img/back.jpg'),
        imgService: require('../../../assets/img/service.png'),
        imgSet: require('../../../assets/img/set.png'),
        imgOrder: require('../../../assets/img/dingdan.png'),
        imgLoveCar: require('../../../assets/img/cheliang.png'),
        imgCollection: require('../../../assets/img/shoucang.png'),
        imgComment: require('../../../assets/img/pinglun.png'),
        imgFeedBack: require('../../../assets/img/fankui.png'),
        imgQuestion: require('../../../assets/img/wenda.png')
      }
    },
    methods: {
      recharge(){
        alert("aaaaaaaa")
        // this.show3 = true;
        this.$router.push({name: 'recharge'});
        //跳转到上一次浏览的页面  this.$router.go(-1)
        //指定跳转的地址 this.$router.replace('/menu')
        //通过push进行跳转
        // this.$router.push('/personalCenter/recharge')
      },
      cardClick(){
        alert("aaaaaaaa")
        this.$router.push({name: 'chargeCard'});
      },
      orderClick(){
        this.$router.push({name: 'order'});
      },
      addCarClick(){
        this.$router.push({name: 'addCar'});
      },
      collectionClick(){
        this.$router.push("/collectStasion");
      },
      commentClick(){
        this.$router.push({name: 'comment'});
      },
      feedbackClick(){
        this.$router.push({name: 'feedback'});
      },
      questionClick(){
        this.$router.push({name: 'questionAnswer'});
      },
      customerClick(){
        this.$router.push({name: 'customerService'});
      },
      setClick(){
        this.$router.push({name: 'setting'});
      },
      to_login(){
        this.$router.push("/login");
      }
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
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


  /*个人中心*/
  /**user.wxss**/
  page{
    height:100vh;
  }
  /* van-button> button:first-child{
    background-color: #1296db;
  } */
  .user_head {
    display: flex;
    flex-direction: column;
    height: 20vh;
    background-color: #fff;
    /*position: absolute;*/
  }

  .user_bg{
    width: 100%;
    height: 20vh;
  }
  /* 服务 */
  .user_service{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 1vw;
  }
  .user_service_img{
    width: 30px;
    height: 30px;
    position: static;
    margin-left: 0.5vw;
    margin-top: 1vw;
    display: block;
  }
  .user_service_text{
    font-size: 20px;
    color: white;
    position: static;
    display: block;
    margin-left: 0.5vw;
    margin-top: 1vw;
  }

  /* 设置 */
  .user_set{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 1vw;
  }
  .user_set_img{
    width: 30px;
    height: 30px;
    position: static;
    margin-right: 0.5vw;
    margin-top: 1vw;
    display: block;
  }
  .user_set_text{
    font-size: 20px;
    color: white;
    position: static;
    display: block;
    margin-right: 0.5vw;
    margin-top: 1vw;
  }

  /* 头像 */
  .user_portrait{
    display: flex;
    flex-direction: column;
    position: absolute;
    margin:auto;
    left:0px;
    right:0px;
    top:0px;
    width:  20vh;
    height: 20vh;
  }

  .user_portrait_img{
    width: 12vh;
    height: 12vh;
    margin-top: 3vh;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    position: static;
    display: block;
    border-radius: 6vh;
    background-color: white;
  }
  .user_portrait_text{
    font-size: 2vh;
    color: white;
    position: static;
    display: block;
    text-align: center;
  }
  .div_title{
    display: flex;
    height: 6vh;
    line-height: 6vh;
    border-bottom:1px solid rgba(0, 0, 0, 0.26);
    font-size: 20px;
    text-indent: 2vw;
  }
  .user_div {
    height: 20%;
    width: 100%;
    border-bottom:1px solid rgba(0, 0, 0, 0.26);
  }

  .div_body_out_border{
    border-right:1px solid rgba(0, 0, 0, 0.26);
  }
  .div_body_text_1{
    /*font-size: 1vw;*/
    height: 8vh;
    line-height: 8vh;
  }

  .div_body_text_2 {
    /*font-size: 2.5vw;*/
    height: 5vh;
    line-height: 5vh;
  }
  .div_body_button_1{
    height: 8vh;
    line-height: 8vh;
  }

  .div_body_text_3{
    font-size: 15px;
    height: 8vh;
    line-height: 8vh;
    color: rgba(0, 0, 0, 0.568);
  }
  .div_body_button_charge{
    font-size: 15px;
    height: 4vh;
    width: 5vw;
    line-height: 4vh;
    border-radius: 5px;
  }

  .user_icon{
    /*width: 5vw;*/
    height: 10vh;
    margin-top: 2vh;
  }

  .user_div_login{
    width: 100%;
    height: 20vh;
    line-height: 20vh;
    /*position: fixed;*/
    left:0px;
    right:0px;
    bottom:0px;
  }

  .div_body_button_login{
    font-size: 20px;
    height: 6vh;
    line-height: 6vh;
    width: 90%;
    border-radius: 5px;
  }


  .pile_info_view view{
    height:15px;
    line-height: 15px;
    margin-bottom: 3px;
  }

</style>
