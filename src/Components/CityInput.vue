<template>
  <div>
    <div>
      <h2>Додавання міста</h2>
      <input type="text" id="city-name" placeholder="Введіть місто">
      <label for="city-name">Введіть назву міста</label>
      <button>Додати</button>
    </div>
    <div>
      <h2>Вибір міста</h2>
      <input type="text" id="city-name" placeholder="Введіть місто">
      <select id="city-choose" v-model="currentCity">
        <option v-for="item in cityList">{{ item.cityName }}</option>
      </select>
      <label for="city-choose">Оберіть місто</label>
      <router-link :to="'/student-info/'+currentCity">

      </router-link>
    </div>
  </div>





</template>

<script >
import { defineComponent } from 'vue';
export default defineComponent({
  name: "CityInput",
   components: {
    StudentInput
  },
  props: {
    item: {
      type: Object,
      require: true
    }
  },
   data() {
    return {
      cityList:{},
      
    };
  },
   methods:{

  }

});
</script>


