<template>
  <!--设置中心-->
  <!--<el-row :gutter="14">-->
    <!--<el-col :span="24">-->
      <div class="div_two">
        <van-cell icon="" is-link>
          <div slot="title" class="img_charge" @click="div_addCar">
            <img class='cell_img' :src='imgLoveCar'/>
            <div class="van-cell-text">车牌识别充设置</div>
          </div>
        </van-cell>

        <van-cell icon="" is-link>
          <div slot="title" class="img_charge" @click="div_feedback">
            <img class='cell_img' :src='imgFanKui'/>
            <div class="van-cell-text">意见反馈</div>
          </div>
        </van-cell>

        <van-cell icon="" is-link>
          <div slot="title" class="img_charge">
            <img class='cell_img' :src='imgPaySet'/>

              <el-popover placement="bottom" title="支付设置" trigger="click" >
                <el-select >
                  <el-option>授信支付</el-option>
                  <el-option>钱包支付</el-option>
                  <el-option>卡支付</el-option>
                </el-select>

                <!--<el-button slot="reference">支付设置</el-button>-->
                <div class="van-cell-text_pay" slot="reference">支付设置</div>
              </el-popover>

          </div>
        </van-cell>


        </div>
    <!--</el-col>-->
  <!--</el-row>-->
</template>

<script>
  export default {
    name: 'setting',
    data () {
      return {
        show: false,
        actions: [
          {
            name: '选项'
          },
          {
            name: '分享',
            subname: '描述信息',
            openType: 'share'
          },
          {
            loading: true
          },
          {
            name: '禁用选项',
            disabled: true
          }
        ],
        imgLoveCar: require('../../../assets/img/cheliang.png'),
        imgFanKui: require('../../../assets/img/yijianfankui.png'),
        imgPaySet: require('../../../assets/img/paySet.png'),
      }
    },
    methods: {
      div_addCar(){
        this.$router.push({name: 'addCar'});
      },
      div_feedback(){
        this.$router.push("/feedbackInfo");
      },
      onClose() {
        this.setData({ show: false });
      },
      onSelect(event) {
        console.log(event.detail);
      }
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }
  .img_charge{
    text-align-last: left;
  }
  .van-cell-text_pay{
    float: inherit;
    padding-left: 5px;
    display: inline-block;
    font-size: 18px;
  }
  .van-cell-text{
    padding-left: 5px;
    display: inline-block;
    font-size: 18px;
  }
  .cell_img{
    padding-left: 10px;
    /*width: 3vw;*/
    height: 5vh;
    line-height: 5vh;
    display: inline-block;
    vertical-align: middle;
  }

  .car_li_field input:first-child{
    text-align: left;
    height: 35px;
    line-height: 35px;
    display: inline-block;
  }



</style>
