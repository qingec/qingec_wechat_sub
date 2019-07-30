<template>
  <!--添加爱车-->
      <div class="div_two">
        <div style="padding:30px 30px 30px 30px;">
          <div class='addCar'>
            <div class='img' @click="div_car">
              <img class='img_car' :src='imgCar'/>
            </div>
            <div class='text'>
              <span class='text_car'>添加爱车</span>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
</template>

<script>
  export default {
    name: 'problem',
    data () {
      return {
        imgCar: require('../../../assets/img/add_car.png'),
      }
    },
    methods: {
      div_car(){
        alert("sssssssssss")
        this.$router.push({name: 'carInfo'});
      }
    }
  }
</script>

<style scoped>
  .div_two{
    background-color: white;
  }

  .addCar{
    border: 1px solid rgba(0, 0, 0, 0.315);
    border-radius: 8px;
    width: 100%;
    line-height: 200px;
    text-align: center;
    /* margin: auto;
    display:column;
    align-items:center;
    justify-content:center;  */
  }

  .text_car{
    display: inline-block;
    font-size: 25px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
  }

  .img_car{
    display: inline-block;
    width: 100px;
    height: 100px;
    vertical-align: middle;
    margin-top: 12px;
  }

  .img,.text{
    height: 100px;
    line-height: 100px;
  }
  .car_save{
    width: 100%;
    display: block;
    position: absolute;
    text-align: center;
    /*top: 90vh;*/
    /*top:50vh;*/

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


  .text{
    /*background-color: saddlebrown;*/
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
  /* van-button> button:first-child{
    background-color: #1296db;
  } */


</style>
