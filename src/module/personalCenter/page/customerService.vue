<template>
  <!--客服中心-->
      <div class="div_two">
        <van-cell icon="" is-link>
          <div slot="title" class="img_charge">
            <img class='cell_img' :src='imgUsuall'/>
            <div class="van-cell-text">常见问题</div>
          </div>
        </van-cell>

        <van-cell icon="" is-link>
          <div slot="title" class="img_charge">
            <img class='cell_img' :src='imgOnline'/>
            <div class="van-cell-text">在线客服</div>
          </div>
        </van-cell>

        <van-cell icon="" is-link>
          <div slot="title" class="img_charge" @click="div_feedback">
            <img class='cell_img' :src='imgSuggest'/>
            <div class="van-cell-text">意见反馈</div>
          </div>
        </van-cell>

        <van-cell icon="" is-link>
          <div slot="title" class="img_charge">
            <img class='cell_img' :src='imgTel'/>
            <div class="van-cell-text">客服电话</div>
          </div>
          <div >
            <div style=' text-align: right;font-size: 20px;'>66-66666</div>
          </div>
        </van-cell>
      </div>
</template>

<script>
  export default {
    name: 'customerService',
    data () {
      return {
        imgUsuall: require('../../../assets/img/changjianwenti.png'),
        imgOnline: require('../../../assets/img/zaixiankefu.png'),
        imgSuggest: require('../../../assets/img/yijianfankui.png'),
        imgTel: require('../../../assets/img/kefudianhua.png'),

      }
    },
    methods: {
      div_feedback(){
        this.$router.push("/feedbackInfo");
      }
    }
  }
</script>

<style scoped>

  .div_two{
    background-color: white;
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
