<template>
  <!--桩详情-->
      <div class="div_two div_margin">
        <el-row>
          <div class='tab_pile_view'>
            <van-cell  >
              <div slot="title">
                <div class="pile_cell_title">当前价格</div>
              </div>
              <div>
                <div class="pile_cell_value">
                  <span style='font-size:12px;color:red'>1.2300</span>元/度（含服务费）</div>
              </div>
            </van-cell>
            <van-cell >
              <div style="float: right">
                <div class="pile_cell_value">电费0.9300元/度，服务费0.8000元/度</div>
              </div>
            </van-cell>

            <van-cell  ink-type="navigateTo">
              <div style="float: right">
                <div class="pile_cell_value">
                  8:00开始 1.6620元/度 价格详情
                  <i class="el-icon-arrow-right" style="font-size: 15px;margin-left: 5px;"></i>
                </div>
              </div>
            </van-cell>
          </div>
          <div class='pile_cell_title tab_pile_view add_margin_view padding-style'>
            停车 10元/时 （停车费为场地方收取，以现场实际收费为准）
          </div>

          <div class='tab_pile_view add_margin_view'>
            <van-cell >
              <div slot="title">
                <div class="pile_cell_title">使用情况</div>
              </div>
              <div>
                <div class="pile_cell_value">
                  查看详情
                </div>
              </div>
            </van-cell>
          </div>

          <div class='tab_pile_view add_margin_view'>
            <van-cell >
              <div slot="title">
                <div class="pile_cell_title">支付账户</div>
              </div>
              <div>
                <div class="pile_cell_value">
                  个人账户
                </div>
              </div>
            </van-cell>
          </div>

          <div class='tab_pile_view add_margin_view'>
            <van-cell >
              <div slot="title">
                <div class="pile_cell_title">账户余额
                  <span style="color: #1296db">0.00</span>元
                </div>

              </div>
              <div>
                <div class="pile_cell_value">
                  查看详情
                </div>
              </div>
            </van-cell>
          </div>

          <div class='tab_pile_view_button'>
            <span class='pile_cell_value'>
              终端离网，请选择其他终端充电。
            </span>
            <button   class='charge_button'>立即充电</button>
          </div>
        </el-row>
      </div>
</template>

<script>
  export default {
    name: 'pileDetail',
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

  .div_margin{
    margin-top: 20px;
    /*padding-bottom: 10px;*/
  }

  .charge_button{
    font-size: 25px;
    height: 6vh;
    width: 90%;
    line-height: 6vh;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    margin-bottom: 20px;
  }

  .tab_pile_view{
    padding: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    border-top: 1px solid rgba(0, 0, 0, 0.26);
    /*border-bottom-right-radius: 0 0 10px;*/
    border-top-color:  rgba(0, 0, 0, 0.26);
    border-bottom-color: rgba(0, 0, 0, 0.26);
    text-align: left;
  }

  .pile_cell_title{
    text-align: left;
    font-size: 15px;
  }
  .pile_cell_value{
    font-size: 13px;
  }
  .add_margin_view{
    margin: 10px 0px;
  }
  .padding-style{
    padding-left: 20px;
  }
  .tab_pile_view_button{
    margin-top: 40px;
    text-align: center;
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

