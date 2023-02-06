<template>
  <CityInput :cityList="cityList"></CityInput>
  <CityShow :item="currentPositionCity" v-if="currentPositionCity"></CityShow>
  <CityShow v-for="item in cityList" :item="item"></CityShow>
</template>

<script>
import { CityInput,CityShow } from '../Components';
import { api } from '../Api';

export default{
  name:"Home",
  components:{
    CityInput,
    CityShow
  },
  data() {
    return {
      cityList:[],
      currentPositionCity:"",
    }
  },
  mounted(){

    this.getCityList();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        api.getData({lat,lon})
        .then((res)=>{
          this.currentPositionCity = res.name;
        })

        .catch((e)=>{
          alert(e);
        })
      })
    }
  },
  methods:{
    getCityList(){
      if(localStorage.getItem('cityList')){
        this.cityList = JSON.parse(localStorage.getItem('cityList'));
      }
    }
  }
}

</script>