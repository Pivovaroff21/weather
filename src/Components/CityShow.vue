<template>

<div class="container">
  <table>
    <tr>
      <td>{{ info.name }}</td>
      <td>{{ sys.country }}</td>
      <td>[{{ coord.lon }}];[{{ coord.lat }}]</td>
    </tr>
    <tr>
      <td>

      </td>
      <td>
        humidity
      </td>
      <td>
        {{ main.humidity }}
      </td>
    </tr>

    <tr>
      <td>

      </td>
      <td>
        temp
      </td>
      <td>
        {{ main.temp }}&#8451;
      </td>
    </tr>

    <tr>
      <td>

      </td>
      <td>
        main
      </td>
      <td>
        {{ weather.main }}
      </td>
    </tr>

    <tr>
      <td>

      </td>
      <td>
        pressure
      </td>
      <td>
        {{ main.pressure }}hpa
      </td>
    </tr>

    <tr>
      <td>

      </td>
      <td>
        description
      </td>
      <td>
        {{ weather.description }}
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import {Api} from '../Api'
import { defineComponent } from 'vue';
export default defineComponent({
  name: "CityShow",
  props: {
    item: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      info:{},
      sys:{},
      weather:{},
      coord:{},
      main:{}
    };
  },
  mounted() {
    Api.getWeatherInfo(this.item)
    .then((res)=>{
      console.log(res.data)
      this.info = res.data;
      this.sys = res.data.sys;
      this.weather = res.data.weather[0];
      this.coord = res.data.coord;
      this.main = res.data.main;
    })
    .catch((e)=>{
      alert(e);
    })
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
}
table{


 font-family:"Arial",serif ;
 color:#fff;
 font-size: 18px;
}
tr{
  margin-bottom: 20px;
}
td{
  width:173px;
}

</style>