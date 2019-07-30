<template>
  <!--充值-->
  <!--<el-row :gutter="14">-->
    <!--<el-col :span="24">-->
      <div class="div_two div_margin">
        <router-view></router-view>
        <el-row>
          <div class="div_cost">
            充值金额
          </div>
        </el-row>
        <el-row>
          <div style="margin-bottom: 20px;">
            <el-row>
              <el-col :span="12">
                <div> <van-button  plain  type="primary" class="div_rechargebtn">10</van-button></div>
              </el-col>
              <el-col :span="12">
                <div> <van-button  plain  type="primary" class="div_rechargebtn">50</van-button></div>
              </el-col>
            </el-row>
          </div>

          <div style="margin-bottom: 20px;">
            <el-row>
              <el-col :span="12">
                <div> <van-button  plain  type="primary" class="div_rechargebtn">100</van-button></div>
              </el-col>
              <el-col :span="12">
                <div> <van-button  plain  type="primary" class="div_rechargebtn">200</van-button></div>
              </el-col>
            </el-row>
          </div>

          <div class="div_border">
            <van-field label="金额(元)" placeholder="请输入金额"/>
          </div>
          <div class="login_btn">
            <van-button type="info" class="div_button_login" size="normal">
              立即充值
            </van-button>
          </div>
        </el-row>

      </div>
    <!--</el-col>-->
  <!--</el-row>-->
</template>

<script>
  export default {
    name: 'recharge',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }


  .div_cost{
    text-align: left;
    margin-left: 20px;
    height: 40px;
    line-height: 40px;
  }
  .div_border{
    text-align: left;
    border-top: 1px solid rgba(0, 0, 0, 0.26);
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
  }
  .div_rechargebtn{
    width: 90%;
    border-radius: 6px;
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


</style>
