<template>
  <div class="div_two">
    <!--<div class="hidden" v-if="!show3">-->
    <div style="padding: 10px 10px 10px 10px;background-color: #1296db">
      <el-row>
        <el-col :span="22">
          <el-input  placeholder="请输入关键词" prefix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="2">
          <img class="img_size" :src="imgMapDing"/>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row class="row_Solide">
        <!-- 滑块 -->
        <el-col :span="18">
          <div class="div_Solide">
            <scroll-div style="width: 100%;height: 24px;white-space: nowrap;" scroll-x>
              <button type='button' class='scrollContainer_button'>精品站</button>
              <button type='button' class='scrollContainer_button'>免费停车</button>
              <button type='button' class='scrollContainer_button'>自营</button>
              <button type='button' class='scrollContainer_button'>交流</button>
              <button type='button' class='scrollContainer_button'>直流</button>
              <button type='button' class='scrollContainer_button'>测试</button>
              <button type='button' class='scrollContainer_button'>测试</button>
              <button type='button' class='scrollContainer_button'>测试</button>
              <button type='button' class='scrollContainer_button'>测试</button>
              <button type='button' class='scrollContainer_button'>测试</button>
            </scroll-div>

          </div>
        </el-col>
        <el-col :span="6">
          <div style="margin-left: 20px">
            <!-- 筛选 -->
            <el-col :span="6" class="span_choose"><span>筛选</span></el-col>
            <el-col :span="4"> <img class='scrollContainer_img_shaixuan' :src='imgChoose'/></el-col>
            <!-- 排序 -->
            <el-col :span="6" class="span_choose"><span class='scrollContainer_span_paixu'>排序</span></el-col>
            <el-col :span="2" > <img class='scrollContainer_img_paixu' :src='imgSort'/></el-col>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--电站列表-->
      <div  @click="div_stationList">
        <el-row class='stations_div'>
          <el-col :span="24">
            <el-row class='scroll_station_row'>
              <el-col :span="3"><img class='station_img'  :src='imgSuo'/></el-col>
              <el-col :span="16">
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
                <div style="float: left;margin: 85px 0px 10px 0px">
                  <el-row >
                    <span style='font-size:13px;color:rgba(0, 0, 0, 0.26)'>闵行区/6.6KM</span>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    <!--电站列表-->
    <el-row class='stations_div'>
      <el-col :span="24">
        <el-row class='scroll_station_row'>
          <el-col :span="3"><img class='station_img'  :src='imgSuo'/></el-col>
          <el-col :span="16">
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
            <div style="float: left;margin: 85px 0px 10px 0px">
              <el-row >
                <span style='font-size:13px;color:rgba(0, 0, 0, 0.26)'>闵行区/6.6KM</span>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--电站列表-->
    <el-row class='stations_div'>
      <el-col :span="24">
        <el-row class='scroll_station_row'>
          <el-col :span="3"><img class='station_img'  :src='imgSuo'/></el-col>
          <el-col :span="16">
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
            <div style="float: left;margin: 85px 0px 10px 0px">
              <el-row >
                <span style='font-size:13px;color:rgba(0, 0, 0, 0.26)'>闵行区/6.6KM</span>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--电站列表-->
    <el-row class='stations_div'>
      <el-col :span="24">
        <el-row class='scroll_station_row'>
          <el-col :span="3"><img class='station_img'  :src='imgSuo'/></el-col>
          <el-col :span="16">
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
            <div style="float: left;margin: 85px 0px 10px 0px">
              <el-row >
                <span style='font-size:13px;color:rgba(0, 0, 0, 0.26)'>闵行区/6.6KM</span>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--电站列表-->
    <el-row class='stations_div'>
      <el-col :span="24">
        <el-row class='scroll_station_row'>
          <el-col :span="3"><img class='station_img'  :src='imgSuo'/></el-col>
          <el-col :span="16">
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
            <div style="float: left;margin: 85px 0px 10px 0px">
              <el-row >
                <span style='font-size:13px;color:rgba(0, 0, 0, 0.26)'>闵行区/6.6KM</span>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--电站列表-->
    <el-row class='stations_div'>
      <el-col :span="24">
        <el-row class='scroll_station_row'>
          <el-col :span="3"><img class='station_img'  :src='imgSuo'/></el-col>
          <el-col :span="16">
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
            <div style="float: left;margin: 85px 0px 10px 0px">
              <el-row >
                <span style='font-size:13px;color:rgba(0, 0, 0, 0.26)'>闵行区/6.6KM</span>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--</div>-->
    <!--<router-view :key="$route.fullPath"></router-view>-->
  </div>
</template>



<script>
  export default {
    name: 'problem',
    data () {
      return {
        imgMapDing: require('../../../assets/img/map_ding.png'),
        imgSort: require('../../../assets/img/paixu.png'),
        imgChoose: require('../../../assets/img/shaixuan.png'),
        imgSuo: require('../../../assets/img/qingneng.png'),
        imgStar: require('../../../assets/img/shoucang_no.png')
      }
    },
    methods: {
      handler ({ BMap, map }) {},
      div_stationList(){
        alert("aaaaaaaaa")
        // this.show3 = true;
        this.$router.push({name: 'stationDetail'});
      }
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }

  .img_size{
    width: 40px;
    height: 40px;
  }

  .scrollContainer_button{
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
    /* box-shadow: 0 0 1px #1296db; */

  }
  .row_Solide{
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);
  }
  .div_Solide{
    width: 100%;
    height: 30px;
    background-color: white;
  }
  .div_station{
    float: left;
    text-align: left;
    margin: 10px 0px 10px 50px
  }
  .span_choose{
    padding: 5px 0px 5px 0px;
    font-size: 15px;
  }
  .scrollContainer_img_paixu,.scrollContainer_img_shaixuan{
    width: 20px;
    height: 20px;
    line-height: 20px;
    display:  inline-block;
    vertical-align: middle;
    padding: 5px 0px 5px 0px;
  }

  .stations_div{
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
  }

  .station_img{
    height: 100px;
    width: 100px;
    display: inherit;
    margin: 10px 0px 5px 10px;
    border-radius: 5px;
    /*background-color: #000;*/
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

  /*个人中心*/
  /**user.wxss**/
  page{
    height:100vh;
  }

</style>


