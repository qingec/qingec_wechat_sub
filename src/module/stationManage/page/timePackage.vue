<template>
  <!--分时费率-->
  <div class="div_two div_margin">
    <!--尖-->
    <div class="charge_price_div j_time">
      <el-row>
        <div class='price_div'>
          <span>1.2800</span>>元/度（含服务费）
        </div>
        <div class='time_div'>
          00:00-06:00
        </div>
      </el-row>
      <el-row>
        <div class='price_detail_div'>电费0.8000元/度，服务费0.4800元/度</div>
        <div class='j_div jfpg_div'>尖</div>
      </el-row>
    </div>
    <!--峰-->
    <div class="charge_price_div">
      <el-row>
        <div class='price_div'>
          <span>1.2800</span>>元/度（含服务费）
        </div>
        <div class='time_div'>
          00:00-06:00
        </div>
      </el-row>
      <el-row>
        <div class='price_detail_div'>电费0.8000元/度，服务费0.4800元/度</div>
        <div class='f_div jfpg_div'>峰</div>
      </el-row>
    </div>
    <!--平-->
    <div class="charge_price_div">
      <el-row>
        <div class='price_div'>
          <span>1.2800</span>>元/度（含服务费）
        </div>
        <div class='time_div'>
          00:00-06:00
        </div>
      </el-row>
      <el-row>
        <div class='price_detail_div'>电费0.8000元/度，服务费0.4800元/度</div>
        <div class='p_div jfpg_div'>平</div>
      </el-row>
    </div>
    <!--谷-->
    <div class="charge_price_div">
      <el-row>
        <div class='price_div'>
          <span>1.2800</span>>元/度（含服务费）
        </div>
        <div class='time_div'>
          00:00-06:00
        </div>
      </el-row>
      <el-row>
        <div class='price_detail_div'>电费0.8000元/度，服务费0.4800元/度</div>
        <div class='g_div jfpg_div'>谷</div>
      </el-row>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'problem',
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
  .charge_price_div{
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
  }
  .price_div{
    display: inline-block;
    float: left;
    font-size: 15px;
    margin: 10px;
  }
  .time_div{
    font-size: 15px;
    /* display: inline-block; */
    margin: 10px;
    float: right;
  }
  .price_detail_div{
    float: left;
    font-size: 13px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.26);
    margin: 10px;
  }

  .jfpg_div{
    font-size: 15px;
    /* display: inline-block; */
    float: right;
    height: 20px;
    width: 20px;
    text-align: center;
    line-height: 20px;
    margin: 7px 10px 7px 0;
    color: #fff;
    border-radius: 3px;
  }
  .j_div{
    background: linear-gradient(rgba(11, 255, 255, 0.3), rgb(0, 255, 255)); /* 标准的语法 */
  }
  .f_div{
    background: linear-gradient(rgba(255, 178, 11, 0.3), rgb(255, 11, 11));
  }
  .p_div{
    background: linear-gradient(rgba(1, 5, 253, 0.3), rgb(0, 89, 253));
  }
  .g_div{
    background: linear-gradient(rgba(39, 255, 11, 0.3), rgb(11, 255, 84));
  }
  .j_time{
    /*background: linear-gradient(rgba(11, 178, 255, 0.2), rgb(11, 198, 255));*/
    background: linear-gradient(rgba(11, 178, 255, 0.103), rgba(11, 198, 255, 0.596));
  }

  .f_time{
    background: linear-gradient(rgba(255, 178, 11, 0.151), rgba(255, 11, 11, 0.651))
  }
  .p_time{
    /*background: linear-gradient(rgba(1, 5, 253, 0.144), rgba(0, 89, 253, 0.61));*/
    background: linear-gradient(rgba(1, 5, 253, 0.082), rgba(0, 89, 253, 0.493));
  }
  .g_time{
    background: linear-gradient(rgba(39, 255, 11, 0.178), rgba(11, 255, 84, 0.589));
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

  /*个人中心*/
  /**user.wxss**/
  page{
    height:100vh;
  }

  .pile_info_view view{
    height:15px;
    line-height: 15px;
    margin-bottom: 3px;
  }

</style>


