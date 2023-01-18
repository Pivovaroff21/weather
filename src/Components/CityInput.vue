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
        <option v-for="item in cityList">{{ item }}</option>
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
   props: {
    cityList: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      currentCity:'',
      newCity:''
    };
  },
   methods:{
    addNewCity(){
      this.cityList.push(this.newCity);
      try {
        localStorage.setItem ('cityList', JSON.stringify(this.cityList));
      }catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          alert ('Перевищений ліміт');
        }
      }
    }
  }

});
</script>


