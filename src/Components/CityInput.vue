<template>
  <div class="container">
    <div class="item-container">
      <h2>Додавання міста</h2>
      <p>Введіть назву міста</p>
      <input type="text" id="city-name" placeholder="Введіть місто" v-model="newCity" class="data-input">
      <button @click="addNewCity" class="blue-button">Додати</button>
    </div>
    <div class="item-container">
      <h2>Вибір міста</h2>
      <p>Оберіть місто</p>
      <select id="city-choose" v-model="currentCity" class="data-input">
        <option v-for="item in cityList">{{ item }}</option>
      </select>
      <router-link :to="`/weather/${currentCity}`" class="blue-button">
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

<style scoped>

*{
  box-sizing:border-box;
}
.container{

 background: rgba(0, 0, 0, 0.3);
 max-width: 720px;
 margin:0 auto;
 margin-top:100px ;
 display: flex;
 flex-direction: row;
 justify-content:space-between ;
 padding:50px 70px;
 font-family:"Arial",serif ;
 color:#fff;
}

.item-container{
  width:290px;

}

.data-input{
  width:250px;
  border-radius: 50px;
  padding:10px;
  border:transparent;
  font-size: 18px;
  margin-bottom: 10px;
}

.data-input:focus{
    outline: none;
}

h2{
  font-size: 32px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  position:relative;
}
h2::before{
  content:"";
  width:50px;
  height: 2px;
  background-color:blue;
  position: absolute;
  bottom:0;
  left:0;

}

p{
  margin-bottom: 5px;
  font-size: 18px;
  padding-left: 20px;
}

.blue-button{

  width:155px;
  background-color:rgba(117, 131, 245, 1);
  padding: 10px 20px;
  display: block;
  text-decoration: none;
  color:#fff;
  text-align: center;
  border:transparent;
  font-size: 18px;
}
</style>
