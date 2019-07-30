<template>
  <!--正在充电-->
      <div class="div_two">
        <div class='pile_list_view'>
          <!-- 101正在充电 -->
          <el-row>
            <el-col :span="5">
              <div class='pile_num'>
                <span style='font-weight: bold'>101</span>
                <span style='font-size:15px'> 号</span>
              </div>
            </el-col>

            <el-col :span="14">
              <div class='pile_info_view'>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>站名称</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>思源清能</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>桩号</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>3101120137102</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>终端类型</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>直流快充</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>已充电量</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>0 kwh</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>已充时长</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>0:0:60秒</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>已充费用</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>0.52元</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>充电电压</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>520.2v</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>充电电流</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>4.4A</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>剩余时长</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>16分钟</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>SOC</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>66%</span></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="5">
              <div style="margin-top: 40px">
                <div >
                  <van-button  class='pile_end_view'>停止充电</van-button>
                </div>
                <div >
                  <van-button  class='pile_fresh_view'>刷新</van-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--102号正在充电-->
        <div class='pile_list_view'>
          <!-- 遍历pile -->
          <el-row>
            <el-col :span="5">
              <div class='pile_num'>
                <span style='font-weight: bold'>102</span>
                <span style='font-size:15px'> 号</span>
              </div>
            </el-col>

            <el-col :span="14">
              <div class='pile_info_view'>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>站名称</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>思源清能</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>桩号</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>3101120137102</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>终端类型</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>直流快充</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>已充电量</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>0 kwh</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>已充时长</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>0:0:60秒</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>已充费用</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>0.52元</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>充电电压</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>520.2v</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>充电电流</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>4.4A</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>剩余时长</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>16分钟</span></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <div><span class='pile_info_title'>SOC</span></div>
                  </el-col>
                  <el-col :span="7">
                    <div style="float: left"><span class='pile_info_value'>66%</span></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="5">
              <div style="margin-top: 40px">
                <div >
                  <van-button  class='pile_end_view'>停止充电</van-button>
                </div>
                <div >
                  <van-button  class='pile_fresh_view'>刷新</van-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
</template>


<script>
  export default {
    name: 'chargingStation',
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


  .pile_list_view{
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
  }

  .pile_num{
    height: 200px;
    line-height: 200px;
    font-size: 20px;
    text-align: center;
  }
  .pile_info_title{
    display: inline-block;
    text-align: justify;
    text-align-last:justify;
    font-size: 13px;
    width: 60px;
    height: 20px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.26);
    margin-right: 10px;
  }
  .pile_info_value{
    display: inline-block;
    font-size: 13px;
    height: 15px;
    line-height: 15px;
  }
  .pile_info_view view{
    height:15px;
    line-height: 15px;
    margin-bottom: 3px;
  }

  .pile_end_view{
    /*height: 30px;*/
    background-color: #3CB371;
    color: #fff;
    border-radius: 6px;
    font-size: 13px;
    display: block;
    text-align: center;
  }
  .pile_fresh_view{
    color: #000;
    border-radius: 6px;
    background-color: #fff;
    width: 80px;
    margin-top: 30px;
    display: block;
    font-size: 13px;
    text-align: center;
  }

</style>


