<template>
  <CityInput :cityList="cityList"></CityInput>
  <CityShow v-for="item in cityList" :item="item"></CityShow>
</template>

<script>
import { CityInput } from '../Components';
import CityShow from '../Components/CityShow.vue';


export default{
  name:"Home",
  components:{
    CityInput,
    CityShow
  },
  data() {
    return {
      cityList:[]
    }
  },
  mounted(){
    this.getCityList();
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