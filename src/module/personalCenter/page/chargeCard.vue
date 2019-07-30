<template>
  <!--充电卡信息-->
      <div class="div_two">
        <el-row style="height: 20vh;">
          <el-col :span="19">
            <div>
              <van-field   label="充电卡号:" placeholder="请输入充电卡号"/>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="div_bind">
              <van-button type="info"  size="small">绑定</van-button>
            </div>
          </el-col>
        </el-row>
      </div>
</template>

<script>
  export default {
    name: 'problem',
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

  .div_bind{
    height: 44px;
    line-height: 44px;
  }

</style>
