<template>
  <!--反馈-->
      <div class="div_two div_margin">
        <el-row class="row_feed">
          <el-col :span='17'>
            <div style='color: #1989fa' class='edit_view'  >
              <!--<text hidden='{{edit}}'  bindtap='edit_text'>编辑</text>-->
              <span>删除</span>
            </div>
          </el-col>

          <el-col :span='6'>
            <van-button type="info" @click="to_feedback_info" size="small" style='float: right;margin: 5px;'>
              去反馈
            </van-button>
          </el-col>
        </el-row>

        <el-row>
          <div class='feedbacks'>
            <div class='body'>
              <div class='info_view'>
                没有更多了>>
              </div>
            </div>
          </div>
        </el-row>

        <el-row class='feedback_row'>
          <div class='feedback_delete'>
            <van-button type="info" class='delete'>删除</van-button>
          </div>
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
    methods: {
      to_feedback_info(){
        this.$router.push("/feedbackInfo");
      }
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
  }

  /*反馈*/
  .feedbacks {
    /* background-color:rgb(248, 248, 250); */
    border-top: 1px solid rgba(0, 0, 0, 0.26);
  }
  .body {
    padding: 10px;
  }
  .info_view{
    /*margin-left: 10px;*/
    font-size: 20px;
    padding-top: 10px;
  }

  .info_view{
    text-align: center;
    color:rgba(164, 164, 168, 0.856);
  }

  .feedback_delete{
    width: 100%;
    display: block;
    /*position: absolute;*/
    text-align: center;
    height: 140vh;
    line-height: 140vh;
    /*margin-top: 20vh;*/
    margin-bottom: 20px;
    /*top: 90vh;*/

  }
  .delete{
    border-radius: 10px;
    width: 90%;
  }
  .edit_view{
    font-size: 17px;
    vertical-align: middle;
    margin-left: 10px;
    text-align: left;
    height: 40px;
    line-height: 40px;
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

  .cellrow>view:first-child{
    margin-top: 5px;
  }

  van-cell{
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
  }

  .pile_info_view view{
    height:15px;
    line-height: 15px;
    margin-bottom: 3px;
  }

</style>
