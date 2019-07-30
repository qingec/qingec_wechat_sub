

<!--<script>-->
  <!--export default {-->
    <!--name: 'problem',-->
    <!--data () {-->
      <!--return {-->
        <!--multipleSelection: [],-->
        <!--activeName: 'first',-->
        <!--dialogInnerName: 'fastSearch',-->
        <!--show3: false,-->
        <!--input: '',-->
        <!--// 百度地图初始化数据-->
        <!--baidumapSwitch: false,-->
        <!--center: { lng: 114.220941, lat: 22.690015 },-->
        <!--zoom: 16,-->
        <!--location: '上海市',-->
        <!--keyword: '请输入搜索关键词',-->
        <!--dialogFormVisible: false, // 外部对话框-->
        <!--dialogInnerVisible: false, // 内部对话框-->
        <!--val_time: '', // 创建时间-->
        <!--formLabelWidth: '120px',-->
        <!--imgMapList: require('../../../assets/img/map_lists.png'),-->
        <!--imgMapDing: require('../../../assets/img/map_ding.png'),-->
        <!--imgScan: require('../../../assets/img/scan_round.png'),-->
        <!--imgFixed: require('../../../assets/img/map_fixed.png'),-->
        <!--imgCollect: require('../../../assets/img/map_collect.png'),-->
        <!--imgCharg: require('../../../assets/img/map_charging.png'),-->
        <!--imgHistory: require('../../../assets/img/map_history.png'),-->
        <!--imgPerson: require('../../../assets/img/personal.png'),-->
        <!--imgSort: require('../../../assets/img/paixu.png'),-->
        <!--imgChoose: require('../../../assets/img/shaixuan.png'),-->
        <!--imgSuo: require('../../../assets/img/qingneng.png'),-->
        <!--imgStar: require('../../../assets/img/shoucang_no.png'),-->
        <!--imgHouse: require('../../../assets/img/fangzi.png'),-->
        <!--imgGps: require('../../../assets/img/daohang.png'),-->
        <!--imgGroud: require('../../../assets/img/zhoubian.png'),-->
        <!--imgDrop: require('../../../assets/img/zhoubian.png'),-->
        <!--imgCar: require('../../../assets/img/add_car.png'),-->
        <!--imgBackgroud: require('../../../assets/img/back.jpg'),-->
        <!--imgService: require('../../../assets/img/service.png'),-->
        <!--imgSet: require('../../../assets/img/set.png'),-->
        <!--imgOrder: require('../../../assets/img/dingdan.png'),-->
        <!--imgLoveCar: require('../../../assets/img/cheliang.png'),-->
        <!--imgCollection: require('../../../assets/img/shoucang.png'),-->
        <!--imgComment: require('../../../assets/img/pinglun.png'),-->
        <!--imgFeedBack: require('../../../assets/img/fankui.png'),-->
        <!--imgQuestion: require('../../../assets/img/wenda.png'),-->
        <!--imgUsuall: require('../../../assets/img/changjianwenti.png'),-->
        <!--imgOnline: require('../../../assets/img/zaixiankefu.png'),-->
        <!--imgSuggest: require('../../../assets/img/yijianfankui.png'),-->
        <!--imgTel: require('../../../assets/img/kefudianhua.png'),-->
        <!--imgCamera: require('../../../assets/img/xiangji.png'),-->
        <!--imgFanKui: require('../../../assets/img/yijianfankui.png'),-->
        <!--styleJson: [ // 百度地图-->
          <!--/* {-->
             <!--"featureType":"all",-->
             <!--"elementType":"geometry",-->
             <!--"stylers":{-->
               <!--"hue":"#20a0ff",-->
               <!--"saturation":89-->
             <!--}-->
           <!--}, */-->
          <!--{-->
            <!--'featureType': 'water',-->
            <!--'elementType': 'all',-->
            <!--'stylers': {-->
              <!--'color': '#ffffff'-->
            <!--}-->
          <!--}-->
        <!--]-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--handler ({ BMap, map }) {},-->
      <!--handleClick (tab, event) {-->
        <!--console.log(tab, event)-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--.div_one{-->
    <!--background-color: #F2F6FC;-->
  <!--}-->
  <!--.div_two{-->
    <!--background-color: white;-->
  <!--}-->
  <!--.div_order{-->
    <!--text-align: center;-->
    <!--color:rgba(164, 164, 168, 0.856);-->
  <!--}-->
  <!--.van-tabs-border{-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26)-->
  <!--}-->
  <!--.div_fied{-->
    <!--padding-left: 20px;-->
    <!--text-align: left;-->
    <!--font-size: 15px;-->
  <!--}-->
  <!--.charge_price_div{-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.price_div{-->
    <!--display: inline-block;-->
    <!--float: left;-->
    <!--font-size: 15px;-->
    <!--margin: 10px;-->
  <!--}-->
  <!--.time_div{-->
    <!--font-size: 15px;-->
    <!--/* display: inline-block; */-->
    <!--margin: 10px;-->
    <!--float: right;-->
  <!--}-->
  <!--.price_detail_div{-->
    <!--float: left;-->
    <!--font-size: 13px;-->
    <!--display: inline-block;-->
    <!--color: rgba(0, 0, 0, 0.26);-->
    <!--margin: 10px;-->
  <!--}-->

  <!--.jfpg_div{-->
    <!--font-size: 15px;-->
    <!--/* display: inline-block; */-->
    <!--float: right;-->
    <!--height: 20px;-->
    <!--width: 20px;-->
    <!--text-align: center;-->
    <!--line-height: 20px;-->
    <!--margin: 7px 10px 7px 0;-->
    <!--color: #fff;-->
    <!--border-radius: 3px;-->
  <!--}-->
  <!--.j_div{-->
    <!--background: linear-gradient(rgba(11, 255, 255, 0.3), rgb(0, 255, 255)); /* 标准的语法 */-->
  <!--}-->
  <!--.f_div{-->
    <!--background: linear-gradient(rgba(255, 178, 11, 0.3), rgb(255, 11, 11));-->
  <!--}-->
  <!--.p_div{-->
    <!--background: linear-gradient(rgba(1, 5, 253, 0.3), rgb(0, 89, 253));-->
  <!--}-->
  <!--.g_div{-->
    <!--background: linear-gradient(rgba(39, 255, 11, 0.3), rgb(11, 255, 84));-->
  <!--}-->
  <!--.j_time{-->
    <!--/*background: linear-gradient(rgba(11, 178, 255, 0.2), rgb(11, 198, 255));*/-->
    <!--background: linear-gradient(rgba(11, 178, 255, 0.103), rgba(11, 198, 255, 0.596));-->
  <!--}-->

  <!--.f_time{-->
    <!--background: linear-gradient(rgba(255, 178, 11, 0.151), rgba(255, 11, 11, 0.651))-->
  <!--}-->
  <!--.p_time{-->
    <!--/*background: linear-gradient(rgba(1, 5, 253, 0.144), rgba(0, 89, 253, 0.61));*/-->
    <!--background: linear-gradient(rgba(1, 5, 253, 0.082), rgba(0, 89, 253, 0.493));-->
  <!--}-->
  <!--.g_time{-->
    <!--background: linear-gradient(rgba(39, 255, 11, 0.178), rgba(11, 255, 84, 0.589));-->
  <!--}-->
  <!--.div_bind{-->
    <!--height: 44px;-->
    <!--line-height: 44px;-->
  <!--}-->
  <!--.div_cost{-->
    <!--text-align: left;-->
    <!--margin-left: 20px;-->
    <!--height: 40px;-->
    <!--line-height: 40px;-->
  <!--}-->
  <!--.div_border{-->
    <!--text-align: left;-->
    <!--border-top: 1px solid rgba(0, 0, 0, 0.26);-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.div_rechargebtn{-->
    <!--width: 90%;-->
    <!--border-radius: 6px;-->
  <!--}-->
  <!--.van-cell-text{-->
    <!--padding-left: 5px;-->
    <!--display: inline-block;-->
    <!--font-size: 15px;-->
  <!--}-->
  <!--.cell_img{-->
    <!--padding-left: 10px;-->
    <!--width: 3vw;-->
    <!--height: 4vh;-->
    <!--line-height: 4vh;-->
    <!--display: inline-block;-->
    <!--vertical-align: middle;-->
  <!--}-->

  <!--/*反馈信息 相机*/-->
  <!--.feedback_msg_area{-->
    <!--height: 100px;-->
    <!--width: 90%;-->
    <!--background-color: rgba(0, 0, 0, 0.026);-->
    <!--border-color: rgba(0, 0, 0, 0.026);-->
    <!--border-radius: 10px;-->
    <!--margin:10px auto;-->
    <!--font-size: 15px;-->
    <!--padding: 10px;-->
  <!--}-->

  <!--.feedback_msg_placeholder{-->
    <!--font-size: 10px;-->
    <!--color: rgba(0, 0, 0, 0.35);-->
  <!--}-->
  <!--.feedback_tishi_view{-->
    <!--/*margin: 0px 10px;*/-->
    <!--text-align: left;-->
    <!--border-bottom: 1px solid  rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.feedback_photo_view{-->
    <!--padding-bottom: 20px;-->
  <!--}-->
  <!--.photo_img_view{-->
    <!--background-color: rgba(0, 0, 0, 0.050);-->
    <!--width: 110px;-->
    <!--height: 110px;-->
    <!--margin: 10px;-->
    <!--border-radius: 3px;-->
  <!--}-->
  <!--.feedback_photo_img{-->
    <!--height: 100px;-->
    <!--width: 100px;-->
    <!--margin: 5px;-->
  <!--}-->

  <!--/*反馈*/-->
  <!--.feedbacks {-->
    <!--/* background-color:rgb(248, 248, 250); */-->
    <!--border-top: 1px solid rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.body {-->
    <!--padding: 10px;-->
  <!--}-->
  <!--.info_view{-->
    <!--/*margin-left: 10px;*/-->
    <!--font-size: 20px;-->
    <!--padding-top: 10px;-->
  <!--}-->

  <!--.info_view{-->
    <!--text-align: center;-->
    <!--color:rgba(164, 164, 168, 0.856);-->
  <!--}-->

  <!--.feedback_delete{-->
    <!--width: 100%;-->
    <!--display: block;-->
    <!--/*position: absolute;*/-->
    <!--text-align: center;-->
    <!--margin-top: 20vh;-->
    <!--margin-bottom: 20px;-->
    <!--/*top: 90vh;*/-->

  <!--}-->
  <!--.delete{-->
    <!--border-radius: 10px;-->
    <!--width: 90%;-->
  <!--}-->
  <!--.edit_view{-->
    <!--font-size: 17px;-->
    <!--vertical-align: middle;-->
    <!--margin-left: 10px;-->
    <!--text-align: left;-->
    <!--height: 40px;-->
    <!--line-height: 40px;-->
  <!--}-->
  <!--/*.row_feed{*/-->
  <!--/*margin-top: 5px;*/-->
  <!--/*margin-bottom: 5px;*/-->
  <!--/*}*/-->

  <!--.img_size{-->
    <!--width: 40px;-->
    <!--height: 40px;-->
  <!--}-->
  <!--.img_style{-->
    <!--width: 30%;height: 30%-->
  <!--}-->
  <!--.xuanfuImg{-->
    <!--position: absolute;-->
    <!--bottom: 10%;-->
    <!--padding-left: 30px-->
  <!--}-->
  <!--.img_charge{-->
    <!--text-align-last: left;-->
  <!--}-->
  <!--.scrollContainer_button{-->
    <!--display:inline-block;-->
    <!--height:22px;-->
    <!--width: auto;-->
    <!--font-size:12px;-->
    <!--line-height:22px;-->
    <!--margin: 3px 2px 3px 2px;-->
    <!--padding:0px 5px 0px 5px;-->
    <!--border-radius: 8px;-->
    <!--color:#1296db;-->
    <!--background-color:#fff;-->
    <!--border:1px solid #1296db;-->
    <!--/* box-shadow: 0 0 1px #1296db; */-->

  <!--}-->
  <!--.row_Solide{-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26);-->
    <!--box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.div_Solide{-->
    <!--width: 100%;-->
    <!--height: 30px;-->
    <!--background-color: white;-->
  <!--}-->
  <!--.div_station{-->
    <!--float: left;-->
    <!--text-align: left;-->
    <!--margin: 10px 0px 10px 50px-->
  <!--}-->
  <!--.span_choose{-->
    <!--padding: 5px 0px 5px 0px;-->
    <!--font-size: 15px;-->
  <!--}-->
  <!--.scrollContainer_img_paixu,.scrollContainer_img_shaixuan{-->
    <!--width: 20px;-->
    <!--height: 20px;-->
    <!--line-height: 20px;-->
    <!--display:  inline-block;-->
    <!--vertical-align: middle;-->
    <!--padding: 5px 0px 5px 0px;-->
  <!--}-->

  <!--.stations_div{-->
    <!--width: 100%;-->
    <!--height: auto;-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.stationlist_div{-->
    <!--width: 100%;-->
    <!--height: auto;-->
  <!--}-->
  <!--.station_img{-->
    <!--height: 100px;-->
    <!--width: 100px;-->
    <!--display: inherit;-->
    <!--margin: 10px 0px 5px 10px;-->
    <!--border-radius: 5px;-->
    <!--/*background-color: #000;*/-->
  <!--}-->
  <!--.img_star{-->
    <!--width: 22%;-->
    <!--height: 22%;-->
    <!--/*width: 25px;*/-->
    <!--/*height: 25px;*/-->
  <!--}-->
  <!--.addCar{-->
    <!--border: 1px solid rgba(0, 0, 0, 0.315);-->
    <!--border-radius: 8px;-->
    <!--width: 90%;-->
    <!--line-height: 200px;-->
    <!--text-align: center;-->
    <!--/* margin: auto;-->
    <!--display:column;-->
    <!--align-items:center;-->
    <!--justify-content:center;  */-->
  <!--}-->

  <!--.text_car{-->
    <!--display: inline-block;-->
    <!--font-size: 25px;-->
    <!--height: 50px;-->
    <!--line-height: 50px;-->
    <!--vertical-align: middle;-->
  <!--}-->

  <!--.img_car{-->
    <!--display: inline-block;-->
    <!--width: 100px;-->
    <!--height: 100px;-->
    <!--vertical-align: middle;-->
    <!--margin-top: 12px;-->
  <!--}-->

  <!--.img,.text{-->
    <!--height: 100px;-->
    <!--line-height: 100px;-->
  <!--}-->
  <!--.car_save{-->
    <!--width: 100%;-->
    <!--display: block;-->
    <!--position: absolute;-->
    <!--text-align: center;-->
    <!--/*top: 90vh;*/-->
    <!--/*top:50vh;*/-->

  <!--}-->
  <!--.save{-->
    <!--border-radius: 10px;-->
    <!--width: 90%;-->
    <!--margin-top: 20px;-->
  <!--}-->
  <!--.car_switch_view{-->
    <!--height: 45px;-->
  <!--}-->
  <!--.need_padding{-->
    <!--padding: 0 10px;-->
    <!--height: 35px;-->
    <!--text-align: left;-->
  <!--}-->

  <!--.car_li_field input:first-child{-->
    <!--text-align: left;-->
    <!--height: 35px;-->
    <!--line-height: 35px;-->
    <!--display: inline-block;-->
  <!--}-->

  <!--van-cell>view:first-child{-->
    <!--padding-top: 0px;-->
    <!--padding-bottom: 0px;-->
    <!--margin-top: 10px;-->
  <!--}-->
  <!--.cell_input{-->
    <!--position: absolute;-->
    <!--/*left: 46vw;*/-->
    <!--width: 93%;-->
    <!--top: 6px;-->
    <!--text-align-last: right;-->
  <!--}-->

  <!--van-icon>view:first-child{-->
    <!--margin-right: 12px;-->

  <!--}-->

  <!--.fast_ico{-->
    <!--display: inline-block;-->
    <!--background-color: rgba(255, 1, 43, 0.8);-->
    <!--color: #fff;-->
    <!--font-size:13px;-->
    <!--border-radius: 3px;-->
    <!--padding: 0px 2px 0px 2px;-->
    <!--margin: 2px 2px 2px 2px;-->
  <!--}-->
  <!--.slow_ico{-->
    <!--display: inline-block;-->
    <!--background-color: rgba(39, 216, 113, 0.8);-->
    <!--color: #fff;-->
    <!--font-size:13px;-->
    <!--border-radius: 3px;-->
    <!--padding: 0px 2px 0px 2px;-->
    <!--margin: 2px 2px 2px 2px;-->
  <!--}-->
  <!--.slow_num,.fast_num{-->
    <!--display: inline-block;-->
    <!--margin: 2px 2px 2px 2px;-->
    <!--padding: 0px 2px 0px 2px;-->
    <!--color: rgba(0, 0, 0, 0.26);-->
    <!--font-size: 13px;-->
  <!--}-->

  <!--.div_margin{-->
    <!--margin-top: 20px;-->
    <!--/*padding-bottom: 10px;*/-->
  <!--}-->

  <!--.text{-->
    <!--/*background-color: saddlebrown;*/-->
  <!--}-->

  <!--.station_fangzi_img{-->
    <!--width: 30px;-->
    <!--height: 30px;-->
    <!--display: inline-block;-->
  <!--}-->
  <!--.station_fangzi_view,.station_daohang_view,.station_zhoubian_view{-->
    <!--height: 60px;-->
    <!--text-align: center;-->
    <!--display: table-cell;-->
    <!--vertical-align: middle;-->
  <!--}-->
  <!--.station_weizhi_view{-->
    <!--height: 60px;-->
    <!--line-height: 60px;-->
    <!--font-size: 15px;-->
    <!--display: table-cell;-->
    <!--margin-left: 20px;-->
  <!--}-->
  <!--.zhoubian,.daohang{-->
    <!--font-size: 11px;-->
    <!--display: inline-block;-->
  <!--}-->
  <!--.tab_station_detail{-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.026);-->
  <!--}-->

  <!--.cellrow>view:first-child{-->
    <!--margin-top: 5px;-->
  <!--}-->
  <!--.cell_title{-->
    <!--font-size: 16px;-->
    <!--color: rgba(0, 0, 0, 0.26);-->
    <!--height: 35px;-->
    <!--line-height: 35px;-->
  <!--}-->
  <!--.cell_value{-->
    <!--font-size: 16px;-->
    <!--color: #000;-->
    <!--height: 35px;-->
    <!--line-height: 35px;-->
  <!--}-->
  <!--.cell_value_mini{-->
    <!--font-size: 13px;-->
    <!--color: rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.charge_button{-->
    <!--font-size: 25px;-->
    <!--height: 6vh;-->
    <!--width: 90%;-->
    <!--line-height: 6vh;-->
    <!--text-align: center;-->
    <!--background-color: rgba(0, 0, 0, 0.5);-->
    <!--color: #fff;-->
    <!--margin-bottom: 20px;-->
  <!--}-->

  <!--.tab_pile_view{-->
    <!--padding: 5px;-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26);-->
    <!--border-top: 1px solid rgba(0, 0, 0, 0.26);-->
    <!--/*border-bottom-right-radius: 0 0 10px;*/-->
    <!--border-top-color:  rgba(0, 0, 0, 0.26);-->
    <!--border-bottom-color: rgba(0, 0, 0, 0.26);-->
    <!--text-align: left;-->
  <!--}-->

  <!--.pile_cell_title{-->
    <!--text-align: left;-->
    <!--font-size: 15px;-->
  <!--}-->
  <!--.pile_cell_value{-->
    <!--font-size: 13px;-->
  <!--}-->
  <!--.add_margin_view{-->
    <!--margin: 10px 0px;-->
  <!--}-->
  <!--.padding-style{-->
    <!--padding-left: 20px;-->
  <!--}-->
  <!--.tab_pile_view_button{-->
    <!--margin-top: 40px;-->
    <!--text-align: center;-->
  <!--}-->

  <!--van-cell{-->
    <!--height: 35px;-->
    <!--line-height: 35px;-->
    <!--padding: 0 5px;-->
  <!--}-->

  <!--.pile_scroll_view{-->
    <!--height: 30px;-->
    <!--width: 100%;-->
    <!--display: inline-block;-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26);-->
    <!--box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);-->
  <!--}-->

  <!--.pile_scroll {-->
    <!--width: 88%;-->
    <!--height: 24px;-->
    <!--white-space: nowrap;-->
  <!--}-->

  <!--.pile_scroll_button{-->
    <!--display:inline-block;-->
    <!--height:22px;-->
    <!--width: auto;-->
    <!--font-size:12px;-->
    <!--line-height:22px;-->
    <!--margin: 3px 2px 3px 2px;-->
    <!--padding:0px 5px 0px 5px;-->
    <!--border-radius: 8px;-->
    <!--color:#1296db;-->
    <!--background-color:#fff;-->
    <!--border:1px solid #1296db;-->

  <!--}-->
  <!--.pile_scroll_view_shaixuan{-->
    <!--height: 24px;-->
    <!--line-height: 24px;-->
    <!--/*width: 12%;*/-->
    <!--float: left;-->
    <!--text-align: center;-->
    <!--display: table;-->
    <!--/*border-bottom: 1px solid rgba(0, 0, 0, 0.26);*/-->
    <!--/*box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);*/-->
  <!--}-->

  <!--.pile_scroll_text_shaixuan{-->
    <!--font-size: 15px;-->
    <!--height: 16px;-->
    <!--line-height: 16px;-->
    <!--display: table-cell;-->
    <!--vertical-align: middle;-->
  <!--}-->

  <!--/*个人中心*/-->
  <!--/**user.wxss**/-->
  <!--page{-->
    <!--height:100vh;-->
  <!--}-->
  <!--/* van-button> button:first-child{-->
    <!--background-color: #1296db;-->
  <!--} */-->
  <!--.user_head {-->
    <!--display: flex;-->
    <!--flex-direction: column;-->
    <!--height: 20vh;-->
    <!--background-color: #fff;-->
    <!--/*position: absolute;*/-->
  <!--}-->

  <!--.user_bg{-->
    <!--width: 100%;-->
    <!--height: 20vh;-->
  <!--}-->
  <!--/* 服务 */-->
  <!--.user_service{-->
    <!--display: flex;-->
    <!--flex-direction: column;-->
    <!--position: absolute;-->
    <!--left: 1vw;-->
  <!--}-->
  <!--.user_service_img{-->
    <!--width: 2.5vw;-->
    <!--height: 2.5vw;-->
    <!--position: static;-->
    <!--margin-left: 0.5vw;-->
    <!--margin-top: 1vw;-->
    <!--display: block;-->
  <!--}-->
  <!--.user_service_text{-->
    <!--font-size: 20px;-->
    <!--color: white;-->
    <!--position: static;-->
    <!--display: block;-->
    <!--margin-left: 0.5vw;-->
    <!--margin-top: 1vw;-->
  <!--}-->

  <!--/* 设置 */-->
  <!--.user_set{-->
    <!--display: flex;-->
    <!--flex-direction: column;-->
    <!--position: absolute;-->
    <!--right: 1vw;-->
  <!--}-->
  <!--.user_set_img{-->
    <!--width: 2.5vw;-->
    <!--height: 2.5vw;-->
    <!--position: static;-->
    <!--margin-right: 0.5vw;-->
    <!--margin-top: 1vw;-->
    <!--display: block;-->
  <!--}-->
  <!--.user_set_text{-->
    <!--font-size: 20px;-->
    <!--color: white;-->
    <!--position: static;-->
    <!--display: block;-->
    <!--margin-right: 0.5vw;-->
    <!--margin-top: 1vw;-->
  <!--}-->

  <!--/* 头像 */-->
  <!--.user_portrait{-->
    <!--display: flex;-->
    <!--flex-direction: column;-->
    <!--position: absolute;-->
    <!--margin:auto;-->
    <!--left:0px;-->
    <!--right:0px;-->
    <!--top:0px;-->
    <!--width:  20vh;-->
    <!--height: 20vh;-->
  <!--}-->

  <!--.user_portrait_img{-->
    <!--width: 12vh;-->
    <!--height: 12vh;-->
    <!--margin-top: 3vh;-->
    <!--margin-bottom: 0;-->
    <!--margin-left: auto;-->
    <!--margin-right: auto;-->
    <!--position: static;-->
    <!--display: block;-->
    <!--border-radius: 6vh;-->
    <!--background-color: white;-->
  <!--}-->
  <!--.user_portrait_text{-->
    <!--font-size: 2vh;-->
    <!--color: white;-->
    <!--position: static;-->
    <!--display: block;-->
    <!--text-align: center;-->
  <!--}-->
  <!--.div_title{-->
    <!--display: flex;-->
    <!--height: 6vh;-->
    <!--line-height: 6vh;-->
    <!--border-bottom:1px solid rgba(0, 0, 0, 0.26);-->
    <!--font-size: 20px;-->
    <!--text-indent: 2vw;-->
  <!--}-->
  <!--.user_div {-->
    <!--height: 20%;-->
    <!--width: 100%;-->
    <!--border-bottom:1px solid rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--/*.div_body el-col{*/-->
  <!--/*height: 15vh;*/-->
  <!--/*text-align: center;*/-->
  <!--/*}*/-->
  <!--.div_body_out_border{-->
    <!--border-right:1px solid rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.div_body_text_1{-->
    <!--font-size: 1vw;-->
    <!--height: 8vh;-->
    <!--line-height: 8vh;-->
  <!--}-->

  <!--.div_body_text_2 {-->
    <!--/*font-size: 2.5vw;*/-->
    <!--height: 5vh;-->
    <!--line-height: 5vh;-->
  <!--}-->
  <!--.div_body_button_1{-->
    <!--height: 8vh;-->
    <!--line-height: 8vh;-->
  <!--}-->

  <!--.div_body_text_3{-->
    <!--font-size: 15px;-->
    <!--height: 8vh;-->
    <!--line-height: 8vh;-->
    <!--color: rgba(0, 0, 0, 0.568);-->
  <!--}-->
  <!--.div_body_button_charge{-->
    <!--font-size: 15px;-->
    <!--height: 4vh;-->
    <!--width: 5vw;-->
    <!--line-height: 4vh;-->
    <!--border-radius: 5px;-->
  <!--}-->

  <!--/*.div_body_image_1> view:first-child{*/-->
  <!--/*height: 10vh;*/-->
  <!--/*}*/-->

  <!--.user_icon{-->
    <!--width: 5vw;-->
    <!--height: 10vh;-->
    <!--margin-top: 2vh;-->
  <!--}-->

  <!--.user_div_login{-->
    <!--width: 100%;-->
    <!--height: 20vh;-->
    <!--line-height: 20vh;-->
    <!--/*position: fixed;*/-->
    <!--left:0px;-->
    <!--right:0px;-->
    <!--bottom:0px;-->
  <!--}-->

  <!--.div_body_button_login{-->
    <!--font-size: 20px;-->
    <!--height: 6vh;-->
    <!--line-height: 6vh;-->
    <!--width: 90%;-->
    <!--border-radius: 5px;-->
  <!--}-->

  <!--/*注册登录*/-->
  <!--.login_btn{-->
    <!--text-align: center;-->
  <!--}-->
  <!--.login_btn_phone{-->
    <!--text-align: center;-->
    <!--padding-top: 20px;-->
    <!--padding-bottom: 20px;-->
  <!--}-->
  <!--.div_button_login{-->
    <!--font-size: 20px;-->
    <!--height: 6vh;-->
    <!--line-height: 6vh;-->
    <!--width: 90%;-->
    <!--border-radius: 5px;-->
    <!--margin-top: 10px;-->
    <!--margin-bottom: 10px;-->
  <!--}-->

  <!--.pile_list_view{-->
    <!--border-bottom: 1px solid rgba(0, 0, 0, 0.26);-->
  <!--}-->
  <!--.pile_num_short{-->
    <!--height: 126px;-->
    <!--line-height: 126px;-->
    <!--font-size: 20px;-->
    <!--text-align: center;-->
  <!--}-->
  <!--.pile_num{-->
    <!--height: 200px;-->
    <!--line-height: 200px;-->
    <!--font-size: 20px;-->
    <!--text-align: center;-->
  <!--}-->
  <!--.pile_info_title{-->
    <!--display: inline-block;-->
    <!--text-align: justify;-->
    <!--text-align-last:justify;-->
    <!--font-size: 13px;-->
    <!--width: 60px;-->
    <!--height: 20px;-->
    <!--line-height: 20px;-->
    <!--color: rgba(0, 0, 0, 0.26);-->
    <!--margin-right: 10px;-->
  <!--}-->
  <!--.pile_info_value{-->
    <!--display: inline-block;-->
    <!--font-size: 13px;-->
    <!--height: 15px;-->
    <!--line-height: 15px;-->
  <!--}-->
  <!--.pile_info_view view{-->
    <!--height:15px;-->
    <!--line-height: 15px;-->
    <!--margin-bottom: 3px;-->
  <!--}-->
  <!--.pile_status_view{-->
    <!--height: 126px;-->
    <!--line-height: 126px;-->
    <!--font-size: 13px;-->
    <!--text-align: center;-->
  <!--}-->
  <!--.pile_end_view{-->
    <!--/*height: 30px;*/-->
    <!--background-color: #3CB371;-->
    <!--color: #fff;-->
    <!--border-radius: 6px;-->
    <!--font-size: 13px;-->
    <!--display: block;-->
    <!--text-align: center;-->
  <!--}-->
  <!--.pile_fresh_view{-->
    <!--color: #000;-->
    <!--border-radius: 6px;-->
    <!--background-color: #fff;-->
    <!--width: 80px;-->
    <!--margin-top: 30px;-->
    <!--display: block;-->
    <!--font-size: 13px;-->
    <!--text-align: center;-->
  <!--}-->

  <!--.pile_status_outline{-->
    <!--color: #fff;-->
    <!--background-color: rgba(0, 0, 0, 0.26);-->
    <!--border-radius: 3px;-->
    <!--padding: 1px;-->
    <!--margin-right: 2px;-->
  <!--}-->

  <!--.pile_status_online{-->
    <!--color: #fff;-->
    <!--background-color: rgba(100, 248, 1, 0.781);-->
    <!--border-radius: 3px;-->
    <!--padding: 1px;-->
    <!--margin-right: 2px;-->
  <!--}-->

  <!--.pile_status_charging{-->
    <!--color: #fff;-->
    <!--background-color: rgba(0, 255, 242, 0.747);-->
    <!--border-radius: 3px;-->
    <!--padding: 1px;-->
    <!--margin-right: 2px;-->
  <!--}-->

  <!--.pile_status_error{-->
    <!--color: #fff;-->
    <!--background-color: rgba(255, 0, 0, 0.822);-->
    <!--border-radius: 3px;-->
    <!--padding: 1px;-->
    <!--margin-right: 2px;-->
  <!--}-->
  <!--.pile_status_wait{-->
    <!--color: #fff;-->
    <!--background-color: rgba(0, 60, 255, 0.822);-->
    <!--border-radius: 3px;-->
    <!--padding: 1px;-->
    <!--margin-right: 2px;-->
  <!--}-->

  <!--.BaiduMap{-->
    <!--height: 100vh;-->
  <!--}-->
<!--</style>-->

