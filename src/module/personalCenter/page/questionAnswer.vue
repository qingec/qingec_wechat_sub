<template>
  <!--我的问答-->
      <div class="div_two">
        <el-row>
          <el-col :span="24">
            <van-tabs>
              <van-tab title="我的提问">
                <div class="div_order">期待您的期待</div>
              </van-tab>
              <van-tab title="我的回答">
                <div  class="div_order">期待您的回答</div>
              </van-tab>
              <van-tab title="邀请我的">
                <div  class="div_order">没有邀请您的</div>
              </van-tab>
            </van-tabs>
          </el-col>
        </el-row>
      </div>
</template>

<script>
  export default {
    name: 'questionAnswer',
    data () {
      return {
      }
    },
    methods: {}
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
