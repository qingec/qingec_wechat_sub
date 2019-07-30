<template>
  <!--历史充电站/收藏-->
  <!--<el-row :gutter="14">-->
    <!--<el-col :span="24">-->
      <div class="div_two">
        <el-row>
          <el-col :span="24">
            <van-tabs>
              <van-tab title="充电站">
                <!-- 充电站 -->
                <el-row class='stations_div'>
                  <el-col :span="24">
                    <div  @click="to_stationDetail">
                    <el-row class='scroll_station_row'>
                      <el-col :span="4"><img class='station_img'  :src='imgSuo'/></el-col>
                      <el-col :span="14">
                        <div class="div_station">
                          <el-row>
                            <span style='font-size:16px'>上海思源电气充电桩</span>
                          </el-row>
                          <el-row style="margin: 20px 0px 0px 0px;">
                            <span style='font-size:13px'>当前1.2300元/度(含服务费)</span>
                          </el-row>
                          <el-row style="margin: 16px 0px 3px 0px;">
                            <span class='fast_ico'>快9/10</span>
                            <span class='slow_ico'>慢0/10</span>
                            <span style='font-size:13px'>最近充电10分钟前</span>
                          </el-row>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <div style="float: left;margin: 30px 0px 10px 0px">
                          <el-row style="margin-bottom: 25px">
                            <img class='img_star'  :src='imgStar'/>
                          </el-row>
                          <el-row >
                            <span style='font-size:13px;color:rgba(0, 0, 0, 0.26)'>闵行区/6.6KM</span>
                          </el-row>
                        </div>
                      </el-col>
                    </el-row>
                </div>
                  </el-col>
                </el-row>

              </van-tab>

              <van-tab title="充电终端">
                <!--充电终端 -->
                <div class='pile_list_view'>
                  <!-- 遍历pile -->
                  <el-row>
                    <el-col :span="5">
                      <div class='pile_num_short'>
                        <span style='font-weight: bold'>101</span>
                        <span style='font-size:15px'> 号</span>
                      </div>
                    </el-col>

                    <el-col :span="14">
                      <div class='pile_info_view'>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>编号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>3101120137101</span></div>
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
                            <div><span class='pile_info_title'>充电接口</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>功率</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>15kw-75kw</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>电压</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>200v-500v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>辅源类型</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>12v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>车位号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>无</span></div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>

                    <el-col :span="5">
                      <div class='pile_status_view'  @click="to_pileDetail">
                        <span class='pile_status_outline'>离网</span>
                        <span class='pile_status_outline'>快</span>
                        <!--<van-icon name="arrow" bind:click="showPileDetail"/>-->
                        <i class="el-icon-arrow-right" style="font-size: 15px;margin-left: 5px;"></i>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <!--102号-->
                <div class='pile_list_view'>
                  <!-- 遍历pile -->
                  <el-row>
                    <el-col :span="5">
                      <div class='pile_num_short'>
                        <span style='font-weight: bold'>102</span>
                        <span style='font-size:15px'> 号</span>
                      </div>
                    </el-col>

                    <el-col :span="14">
                      <div class='pile_info_view'>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>编号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>3101120137101</span></div>
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
                            <div><span class='pile_info_title'>充电接口</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>功率</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>15kw-75kw</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>电压</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>200v-500v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>辅源类型</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>12v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>车位号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>无</span></div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>

                    <el-col :span="5">
                      <div class='pile_status_view'>
                        <span class='pile_status_online'>在线</span>
                        <span class='pile_status_online'>快</span>
                        <!--<van-icon name="arrow" bind:click="showPileDetail"/>-->
                        <i class="el-icon-arrow-right" style="font-size: 15px;margin-left: 5px;"></i>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <!--103号-->
                <div class='pile_list_view'>
                  <!-- 遍历pile -->
                  <el-row>
                    <el-col :span="5">
                      <div class='pile_num_short'>
                        <span style='font-weight: bold'>103</span>
                        <span style='font-size:15px'> 号</span>
                      </div>
                    </el-col>

                    <el-col :span="14">
                      <div class='pile_info_view'>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>编号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>3101120137101</span></div>
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
                            <div><span class='pile_info_title'>充电接口</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>功率</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>15kw-75kw</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>电压</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>200v-500v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>辅源类型</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>12v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>车位号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>无</span></div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>

                    <el-col :span="5">
                      <div class='pile_status_view'>
                        <span class='pile_status_charging'>充电中</span>
                        <span class='pile_status_charging'>快</span>
                        <!--<van-icon name="arrow" bind:click="showPileDetail"/>-->
                        <i class="el-icon-arrow-right" style="font-size: 15px;margin-left: 5px;"></i>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <!--104号-->
                <div class='pile_list_view'>
                  <!-- 遍历pile -->
                  <el-row>
                    <el-col :span="5">
                      <div class='pile_num_short'>
                        <span style='font-weight: bold'>104</span>
                        <span style='font-size:15px'> 号</span>
                      </div>
                    </el-col>

                    <el-col :span="14">
                      <div class='pile_info_view'>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>编号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>3101120137101</span></div>
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
                            <div><span class='pile_info_title'>充电接口</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>功率</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>15kw-75kw</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>电压</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>200v-500v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>辅源类型</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>12v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>车位号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>无</span></div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>

                    <el-col :span="5">
                      <div class='pile_status_view'>
                        <span class='pile_status_error'>故障</span>
                        <span class='pile_status_error'>快</span>
                        <!--<van-icon name="arrow" bind:click="showPileDetail"/>-->
                        <i class="el-icon-arrow-right" style="font-size: 15px;margin-left: 5px;"></i>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <!--105号-->
                <div class='pile_list_view'>
                  <!-- 遍历pile -->
                  <el-row>
                    <el-col :span="5">
                      <div class='pile_num_short'>
                        <span style='font-weight: bold'>105</span>
                        <span style='font-size:15px'> 号</span>
                      </div>
                    </el-col>

                    <el-col :span="14">
                      <div class='pile_info_view'>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>编号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>3101120137101</span></div>
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
                            <div><span class='pile_info_title'>充电接口</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>功率</span></div>
                          </el-col>
                          <el-col :span="7" style="width: 60%">
                            <div style="float: left"><span class='pile_info_value'>15kw-75kw</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>电压</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>200v-500v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>辅源类型</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>12v</span></div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="7">
                            <div><span class='pile_info_title'>车位号</span></div>
                          </el-col>
                          <el-col :span="7">
                            <div style="float: left"><span class='pile_info_value'>无</span></div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>

                    <el-col :span="5">
                      <div class='pile_status_view'>
                        <span class='pile_status_wait'>空闲</span>
                        <span class='pile_status_wait'>快</span>
                        <!--<van-icon name="arrow" bind:click="showPileDetail"/>-->
                        <i class="el-icon-arrow-right" style="font-size: 15px;margin-left: 5px;"></i>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </van-tab>
            </van-tabs>
          </el-col>
        </el-row>
      </div>
    <!--</el-col>-->
  <!--</el-row>-->
</template>

<script>
  export default {
    name: 'collection',
    data () {
      return {
        imgSuo: require('../../../assets/img/qingneng.png'),
        imgStar: require('../../../assets/img/shoucang_no.png'),
      }
    },
    methods: {
      handler ({ BMap, map }) {},
      handleClick (tab, event) {
        console.log(tab, event)
      },
      to_stationDetail(){
        alert("hhhhhhhh")
        this.$router.push({name: 'stationDetail'});
      },
      to_pileDetail(){
        this.$router.push({name: 'pileDetail'});
      }
    }
  }
</script>

<style scoped>
  .div_two{
    background-color: white;
  }

  .img_star{
    width: 22%;
    height: 22%;
    /*width: 25px;*/
    /*height: 25px;*/
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

  .fast_ico{
    display: inline-block;
    background-color: rgba(255, 1, 43, 0.8);
    color: #fff;
    font-size:13px;
    border-radius: 3px;
    padding: 0px 2px 0px 2px;
    margin: 2px 2px 2px 2px;
  }
  .slow_ico{
    display: inline-block;
    background-color: rgba(39, 216, 113, 0.8);
    color: #fff;
    font-size:13px;
    border-radius: 3px;
    padding: 0px 2px 0px 2px;
    margin: 2px 2px 2px 2px;
  }

  .cellrow>view:first-child{
    margin-top: 5px;
  }


  van-cell{
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
  }


  .pile_list_view{
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
  }
  .pile_num_short{
    height: 126px;
    line-height: 126px;
    font-size: 20px;
    text-align: center;
  }
  .
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
  .pile_status_view{
    height: 126px;
    line-height: 126px;
    font-size: 13px;
    text-align: center;
  }


  .pile_status_outline{
    color: #fff;
    background-color: rgba(0, 0, 0, 0.26);
    border-radius: 3px;
    padding: 1px;
    margin-right: 2px;
  }

  .pile_status_online{
    color: #fff;
    background-color: rgba(100, 248, 1, 0.781);
    border-radius: 3px;
    padding: 1px;
    margin-right: 2px;
  }

  .pile_status_charging{
    color: #fff;
    background-color: rgba(0, 255, 242, 0.747);
    border-radius: 3px;
    padding: 1px;
    margin-right: 2px;
  }

  .pile_status_error{
    color: #fff;
    background-color: rgba(255, 0, 0, 0.822);
    border-radius: 3px;
    padding: 1px;
    margin-right: 2px;
  }
  .pile_status_wait{
    color: #fff;
    background-color: rgba(0, 60, 255, 0.822);
    border-radius: 3px;
    padding: 1px;
    margin-right: 2px;
  }

</style>
