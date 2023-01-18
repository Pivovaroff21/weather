<template>
  <div>
    <div>
      <h2>Додавання міста</h2>
      <input type="text" id="city-name" placeholder="Введіть місто" v-model="newCity">
      <label for="city-name">Введіть назву міста</label>
      <button @click="addNewCity">Додати</button>
    </div>
    <div>
      <h2>Вибір міста</h2>
      <select id="city-choose" v-model="currentCity">
        <option v-for="item in cityList">{{ item.cityName }}</option>
      </select>
      <label for="city-choose">Оберіть місто</label>
      <router-link :to="'/weather/'+currentCity">
      Погода
      </router-link>
    </div>
  </div>





</template>

<script >
import { defineComponent } from 'vue';
export default defineComponent({
  name: "CityInput",
  data() {
    return {
      cityList:[],
      currentCity:'',
      newCity:''
    };
  },
  mounted(){
    this.getCityList();
  },
   methods:{
    getCityList(){
      if(localStorage.getItem('cityList')){
        this.cityList = JSON.parse(localStorage.getItem('cityList'));
      }
    },
    addNewCity(){
      this.cityList.push(this.newCity);
      try {
        localStorage.setItem ('cityList', JSON.stringify(this.cityList));
      }catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          alert ('Перевищений ліміт');
        }
      }
      this.getCityList();
    }
  }

});
</script>


