<template>
  <!--站/终端号详情-->
      <div class="div_two">
        <el-row class='stationlist_div'>
          <el-col :span="24">
            <el-row>
              <el-col :span="3"><img class='station_img'  :src='imgSuo'/></el-col>
              <el-col :span="16">
                <div class="div_station">
                  <el-row>
                    <span style='font-size:16px'>上海思源清能电站</span>
                  </el-row>
                  <el-row style="margin: 20px 0px 0px 0px;">
                    <el-tag  type="warning"  effect="plain">自营</el-tag>
                    <el-tag  type="success" effect="plain">免费停车</el-tag>
                    <el-tag  type="danger" effect="plain">精品站</el-tag>
                    <el-tag  type="info" effect="plain">自营</el-tag>
                    <el-tag  effect="plain">自营</el-tag>
                    <el-tag  effect="plain">自营</el-tag>
                    <el-tag  effect="plain">自营</el-tag>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="5">
                <div style="float: left;margin: 50px 0px 10px 0px">
                  <el-row >
                    <img class='img_star'  :src='imgStar'/>
                  </el-row>
                </div>
              </el-col>
              <el-row style="margin: 0px 0px 5px 2px">
                <el-col :span="8">
                  <span class='fast_ico'>快</span>
                  <span class='fast_num'>空闲9/共10</span>
                  <span class='slow_ico'>慢</span>
                  <span class='slow_num'>空闲0/共10</span>
                </el-col>
              </el-row>
            </el-row>
            <!--站详情-->
            <van-row>
              <van-tabs swipeable animated>
                <van-tab title="电站">
                  <el-row class='tab_station_detail'>
                    <el-col :span="18">
                      <el-row>
                        <div>
                          <div class='station_fangzi_view'>
                            <img  class='station_fangzi_img' :src="imgHouse">
                          </div>
                          <div class='station_weizhi_view'>
                            上海市闵行区华宁路
                          </div>
                        </div>
                      </el-row>
                    </el-col>

                    <el-col :span="3">
                      <el-row>
                        <div class='station_daohang_view'>
                          <div>
                            <!--<image class='station_daohang_img' src='/image/daohang.png'></image>-->
                            <img  class='station_fangzi_img' :src="imgGps">
                          </div>
                          <div>
                            <span class='daohang'>导航</span>
                          </div>
                        </div>
                      </el-row>
                    </el-col>

                    <el-col :span="3">
                      <el-row>
                        <div class='station_zhoubian_view'>
                          <div>
                            <img  class='station_fangzi_img' :src="imgGroud">
                          </div>
                          <div>
                            <span class='zhoubian'>周边</span>
                          </div>
                        </div>
                      </el-row>
                    </el-col>
                  </el-row>

                  <van-cell-group custom-class="tab_station_group">
                    <van-cell custom-class="tab_station_cell">
                      <div slot="title" style="float: left">
                        <div class="cell_title">当前价格</div>
                      </div>
                      <div @click="div_timeFee">
                        <div class="cell_value" link-type="navigateTo">
                          <span style='color:red'>1.2300</span>元/度（含服务费）</div>
                        <div class="cell_value_mini" >18:00开始 1.6620元/度 价格详情
                          <i class="el-icon-arrow-right" style="font-size: large"></i>
                        </div>
                      </div>
                    </van-cell>

                    <van-cell custom-class="tab_station_cell">
                      <div slot="title" style="float: left">
                        <div class="cell_title">停车费</div>
                      </div>
                      <div>
                        <div class="cell_value">免费</div>
                      </div>
                    </van-cell>

                    <van-cell custom-class="tab_station_cell" is-link>
                      <div slot="title" style="float: left">
                        <div class="cell_title">服务提供</div>
                      </div>
                      <div>
                        <div class="cell_value">思源清能</div>
                      </div>
                    </van-cell>

                    <van-cell custom-class="tab_station_cell">
                      <div slot="title" style="float: left">
                        <div class="cell_title">营业时间</div>
                      </div>
                      <div>
                        <div class="cell_value">周一至周日08:00-18:00</div>
                      </div>
                    </van-cell>

                    <van-cell custom-class="tab_station_cell">
                      <div slot="title" style="float: left">
                        <div class="cell_title">服务电话</div>
                      </div>
                      <div>
                        <div class="cell_value">**********</div>
                      </div>
                    </van-cell>

                    <van-cell custom-class="tab_station_cell" is-link>
                      <div slot="title" style="float: left">
                        <div class="cell_title">近七天成功充电90次</div>
                      </div>
                      <div>
                        <div class="cell_value">最近充电：1小时前</div>
                      </div>
                    </van-cell>

                    <van-cell custom-class="tab_station_cell" is-link>
                      <div slot="title" style="float: left">
                        <div class="cell_title">爱车认证</div>
                      </div>
                      <div>
                        <div class="cell_value">查看全部</div>
                      </div>
                    </van-cell>
                  </van-cell-group>
                </van-tab>
                <van-tab title="终端（*）">
                  <el-row>
                    <div class='pile_scroll_view'>
                      <el-col :span="21">
                        <div class='pile_scroll' scroll-x>
                          <button type='button' class='pile_scroll_button'>空闲优先</button>
                          <button type='button' class='pile_scroll_button'>已插枪</button>
                          <button type='button' class='pile_scroll_button'>直流快充</button>
                          <button type='button' class='pile_scroll_button'>测试</button>
                          <button type='button' class='pile_scroll_button'>测试</button>
                          <button type='button' class='pile_scroll_button'>测试</button>
                          <button type='button' class='pile_scroll_button'>测试</button>
                          <button type='button' class='pile_scroll_button'>测试</button>
                          <button type='button' class='pile_scroll_button'>测试</button>
                          <button type='button' class='pile_scroll_button'>测试</button>
                        </div>
                      </el-col>
                      <el-col :span="3">
                        <div class='pile_scroll_view_shaixuan'>
                          <span class='pile_scroll_text_shaixuan'>筛选<i class="el-icon-arrow-down" style="font-size: 15px;margin-left: 5px;"></i></span>
                        </div>
                      </el-col>
                    </div>
                  </el-row>
                  <div class='pile_list_view' @click="divPileList">
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
                            <el-col :span="7" style="width: 36%">
                              <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="7">
                              <div><span class='pile_info_title'>功率</span></div>
                            </el-col>
                            <el-col :span="7">
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
                          <span class='pile_status_outline'>离网</span>
                          <span class='pile_status_outline'>快</span>
                          <!--<van-icon name="arrow"/>-->
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
                            <el-col :span="7" style="width: 36%">
                              <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="7">
                              <div><span class='pile_info_title'>功率</span></div>
                            </el-col>
                            <el-col :span="7">
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
                            <el-col :span="7" style="width: 36%">
                              <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="7">
                              <div><span class='pile_info_title'>功率</span></div>
                            </el-col>
                            <el-col :span="7">
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
                            <el-col :span="7" style="width: 36%">
                              <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="7">
                              <div><span class='pile_info_title'>功率</span></div>
                            </el-col>
                            <el-col :span="7">
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
                            <el-col :span="7" style="width: 36%">
                              <div style="float: left"><span class='pile_info_value'>国标2015 国标2011</span></div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="7">
                              <div><span class='pile_info_title'>功率</span></div>
                            </el-col>
                            <el-col :span="7">
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
                <van-tab title="评论（*）">
                  <!--<template is=""/>-->
                </van-tab>
              </van-tabs>
            </van-row>
          </el-col>
        </el-row>
        <!--<router-view :key="$route.fullPath"></router-view>-->
      </div>
</template>

<script>
  export default {
    name: 'problem',
    data () {
      return {
        imgSuo: require('../../../assets/img/qingneng.png'),
        imgStar: require('../../../assets/img/shoucang_no.png'),
        imgHouse: require('../../../assets/img/fangzi.png'),
        imgGps: require('../../../assets/img/daohang.png'),
        imgGroud: require('../../../assets/img/zhoubian.png')
      }
    },
    methods: {
      handler ({ BMap, map }) {},
      divPileList(){
        alert("aaaaaaaaaaaa")
        this.$router.push({name: 'pileDetail'});
      },
      div_timeFee(){
        this.$router.push({name: 'timePackage'});
      }
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }
  .div_station{
    float: left;
    text-align: left;
    margin: 10px 0px 10px 50px
  }
  .stationlist_div{
    width: 100%;
    height: auto;
  }
  .station_img{
    height: 100px;
    width: 100px;
    display: inherit;
    margin: 10px 0px 5px 10px;
    border-radius: 5px;
    /*background-color: #000;*/
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
  .slow_num,.fast_num{
    display: inline-block;
    margin: 2px 2px 2px 2px;
    padding: 0px 2px 0px 2px;
    color: rgba(0, 0, 0, 0.26);
    font-size: 13px;
  }


  .station_fangzi_img{
    width: 30px;
    height: 30px;
    display: inline-block;
  }
  .station_fangzi_view,.station_daohang_view,.station_zhoubian_view{
    height: 60px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  .station_weizhi_view{
    height: 60px;
    line-height: 60px;
    font-size: 15px;
    display: table-cell;
    margin-left: 20px;
  }
  .zhoubian,.daohang{
    font-size: 11px;
    display: inline-block;
  }
  .tab_station_detail{
    border-bottom: 1px solid rgba(0, 0, 0, 0.026);
  }

  .cellrow>view:first-child{
    margin-top: 5px;
  }
  .cell_title{
    font-size: 16px;
    color: rgba(0, 0, 0, 0.26);
    height: 35px;
    line-height: 35px;
  }
  .cell_value{
    font-size: 16px;
    color: #000;
    height: 35px;
    line-height: 35px;
  }
  .cell_value_mini{
    font-size: 13px;
    color: rgba(0, 0, 0, 0.26);
  }

  van-cell{
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
  }

  .pile_scroll_view{
    height: 30px;
    width: 100%;
    display: inline-block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);
  }

  .pile_scroll {
    width: 88%;
    height: 24px;
    white-space: nowrap;
  }

  .pile_scroll_button{
    display:inline-block;
    height:22px;
    width: auto;
    font-size:12px;
    line-height:22px;
    margin: 3px 2px 3px 2px;
    padding:0px 5px 0px 5px;
    border-radius: 8px;
    color:#1296db;
    background-color:#fff;
    border:1px solid #1296db;

  }
  .pile_scroll_view_shaixuan{
    height: 24px;
    line-height: 24px;
    /*width: 12%;*/
    float: left;
    text-align: center;
    display: table;
    /*border-bottom: 1px solid rgba(0, 0, 0, 0.26);*/
    /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);*/
  }

  .pile_scroll_text_shaixuan{
    font-size: 15px;
    height: 16px;
    line-height: 16px;
    display: table-cell;
    vertical-align: middle;
  }

  /*个人中心*/
  /**user.wxss**/
  page{
    height:100vh;
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

