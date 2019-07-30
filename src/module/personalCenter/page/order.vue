<template>
  <!--订单-->
      <div class="div_two">
        <el-row style="">
          <el-col :span="24">
            <van-tabs>
              <van-tab title="全部订单" class="van-tabs-border">
                <div class="div_order">没有订单</div>
              </van-tab>
              <van-tab title="待支付">
                <div  class="div_order">没有待支付的订单</div>
              </van-tab>
              <van-tab title="已支付">
                <div  class="div_order">没有已支付的订单</div>
              </van-tab>
              <van-tab title="待评论">
                <div  class="div_order">没有待评论的订单</div>
              </van-tab>
            </van-tabs>

          </el-col>
        </el-row>
      </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {

      }
    },
    methods: {
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }
  .div_order{
    text-align: center;
    color:rgba(164, 164, 168, 0.856);
  }


</style>
