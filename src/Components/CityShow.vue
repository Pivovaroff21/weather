<template>

<div class="container">
  <ul>
    <li>{{ info.name }}</li>
    <li><img src="../Assets/humidity.png"></li>
    <li><img src="../Assets/temperature.png"></li>
    <li><img src="../Assets/weather.png"></li>
    <li><img src="../Assets/pressure.png"></li>
    <li><img src="../Assets/description.png"></li>
  </ul>
  <ul>
    <li>{{ sys.country }}</li>
    <li>humidity</li>
    <li>temp</li>
    <li>main</li>
    <li>pressure</li>
    <li>description</li>
  </ul>
  <ul>
  <!-- {{ info.coord }} -->
    <li>[{{ coord.lon }}];[{{ coord.lat }}]</li>
    <li>{{ main.humidity }}</li>
    <li>{{ main.temp }}&#8451;</li>
    <li>{{ weather.main }}</li>
    <li>{{ main.pressure }}hpa</li>
    <li>{{ weather.description }}</li>
  </ul>
</div>

</template>

<script>
import {api} from '../Api'
import { defineComponent } from 'vue';
export default defineComponent({
  name: "CityShow",
  props: {
    item: {
      type: String,
      require: false
    }
  },
  data() {
    return {
      info:{},
      sys:{},
      weather:{},
      coord:{},
      main:{},
    };
  },
  mounted() {

    if(this.item){

      api.getData({city:this.item})
      .then((res)=>{
        this.info = res;
        this.sys = res.sys;
        this.weather = res.weather[0];
        this.coord = res.coord;
        this.main = res.main;
      })
      .catch((e)=>{
        // TODO - show some info for user in this case
        console.log(e);
      })
    }


  },
});
</script>

<style scoped>

*{
  box-sizing:border-box;
}
.container{
background: rgba(0, 0, 0, 0.3);
 width: 720px;
 margin:0 auto;
 margin-top:50px ;
 padding:50px 70px;
 display: flex;
 justify-content: space-between;
 color:#fff;
}
li{
  margin-bottom:5px;
  text-align: center;
  height:32px;
  font-size: 24px;
}
img{
  width:32px;
  height:32px;
}
</style>