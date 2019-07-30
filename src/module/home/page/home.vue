<template>
  <el-row>
    <el-col :span="24">
      <div class="div_two">
        <div style="padding: 10px 10px 10px 10px;background-color: #1296db">
          <el-row>
            <el-col :span="22">
              <el-input  placeholder="请输入关键词" prefix-icon="el-icon-search"></el-input>
            </el-col>
            <el-col :span="2" >
              <img class="img_size" :src="imgMapList" @click="stationListBtn"/>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row>
            <div id="map">
              <baidu-map class="BaiduMap" center="上海" :zoom="15" :scroll-wheel-zoom="true"
                         :map-style="{styleJson:styleJson}"
                         map-type="BMAP_NORMAL_MAP">
                <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
              </baidu-map>
            </div>
          </el-row>
        </div>
        <!--二维码图片-->
        <div style="position: fixed;top:auto;left:0;right:0;text-align:center;bottom: 20px;">
          <img style="width: 20%;height: 25%" :src="imgScan"/>
        </div>
        <!--悬浮四图-->
        <div class="xuanfuImg">
          <div class="img_charge"><img class="img_style" @click="historyBtn" :src="imgHistory"/></div>
          <div class="img_charge"><img class="img_style" @click="chargeBtn" :src="imgCharg"/></div>
          <div class="img_charge"><img class="img_style" @click="collectBtn" :src="imgCollect"/></div>
          <div class="img_charge"><img class="img_style" :src="imgFixed"/></div>
        </div>
        <!--个人中心图片-->
        <div style="position: absolute;bottom: 10%;left: 90%">
          <img style="width: 40px;height: 40px" @click="personalBtn" :src="imgPerson" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        multipleSelection: [],
        activeName: 'first',
        dialogInnerName: 'fastSearch',
        show3: false,
        input: '',
        // 百度地图初始化数据
        baidumapSwitch: false,
        center: { lng: 114.220941, lat: 22.690015 },
        zoom: 16,
        val_time: '', // 创建时间
        formLabelWidth: '120px',
        imgMapList: require('../../../assets/img/map_lists.png'),
        imgScan: require('../../../assets/img/scan_round.png'),
        imgFixed: require('../../../assets/img/map_fixed.png'),
        imgCollect: require('../../../assets/img/map_collect.png'),
        imgCharg: require('../../../assets/img/map_charging.png'),
        imgHistory: require('../../../assets/img/map_history.png'),
        imgPerson: require('../../../assets/img/personal.png'),
        imgSort: require('../../../assets/img/paixu.png'),
        styleJson: [ // 百度地图
          /* {
             "featureType":"all",
             "elementType":"geometry",
             "stylers":{
               "hue":"#20a0ff",
               "saturation":89
             }
           }, */
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
              'color': '#ffffff'
            }
          }
        ]
      }
    },
    methods: {
      handler ({ BMap, map }) {},
      handleClick (tab, event) {
        console.log(tab, event)
      },
      personalBtn(){
        alert("hhhhhhhhh")
        this.$router.push('/personalCenter')
        // this.$router.replace({name:'recharge'})
      },
      historyBtn(){
        alert("hhhhhhhhh")
        this.$router.push('/historyStation')
      },
      chargeBtn(){
        alert("hhhhhhhhh")
        this.$router.push('/chargingStation')
      },
      collectBtn(){
        alert("hhhhhhhhh")
        this.$router.push('/collectStasion')
      },
      stationListBtn(){
        alert("hhhhhhhhh")
        this.$router.push('/stationList')
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
  .img_style{
    width: 20%;height: 30%
  }
  .xuanfuImg{
    position: absolute;
    bottom: 10%;
    padding-left: 30px
  }
  .img_charge{
    text-align-last: left;
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

  .BaiduMap{
    height: 100vh;
  }
</style>
