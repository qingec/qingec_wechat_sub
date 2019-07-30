<template>
  <!--爱车信息-->
      <div class="div_two">
        <div style="height: 350px;">
          <van-cell value="选择车型后,可筛选适合车" is-link class='car_type_view'>
            <div slot="title">
              <div class="car_type need_padding">爱车车型</div>
            </div>
          </van-cell>
          <van-cell value="沪" is-link arrow-direction="down" class='car_num_view'>
            <div slot="title">
              <div class="car_num need_padding">车牌号码</div>
            </div>
          </van-cell>
          <van-cell value="请选择爱车生产年份" is-link  class='car_year_view'>
            <div slot="title">
              <div class="car_year need_padding">生产年份</div>
            </div>
          </van-cell>

          <van-popup position="bottom">
            <van-datetime-picker type="date"/>
          </van-popup>

          <van-cell >
            <div slot="title">
              <div class="car_li need_padding">
                <div style="width: 100%;">
                  续航里程(km)
                </div>
                <div class='cell_input'>
                  <el-input style="width: 70%" placeholder="输入续航,剩余充满时间更精确" clearable>
                  </el-input>
                  <!--<input placeholder='输入续航,剩余充满时间更精确'/>-->
                </div>
              </div>
            </div>
          </van-cell>

          <div class='car_switch_view'>
            <!-- <van-cell class='car_switch_view'> -->
            <div slot="title">
              <div class="car_switch_info need_padding">
                <van-switch-cell title="我要认证爱车"/>
              </div>
            </div>
            <!-- </van-cell> -->
          </div>

          <el-row>
            <div class='car_save'>
              <van-button type="info" class='save'>保存</van-button>
            </div>
          </el-row>

        </div>
      </div>
</template>

<script>
  export default {
    name: 'carInfo',
    data () {
      return {
        show3: false,
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .car_type_view{
    width: 100%;
  }

  .div_two{
    background-color: white;
  }

  .car_save{
    width: 100%;
    display: block;
    position: absolute;
    text-align: center;
    /*top: 90vh;*/
    /*top:50vh;*/

  }
  .save{
    border-radius: 10px;
    width: 90%;
    margin-top: 20px;
  }
  .car_switch_view{
    height: 45px;
  }
  .need_padding{
    /*padding: 0 10px;*/
    height: 35px;
    text-align: left;
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
  .cell_input{
    position: absolute;
    /*left: 46vw;*/
    width: 93%;
    top: 6px;
    text-align-last: right;
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

  .pile_info_view view{
    height:15px;
    line-height: 15px;
    margin-bottom: 3px;
  }

</style>

