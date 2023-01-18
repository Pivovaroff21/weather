<template>
  <div class="wrapper_form">
    <div class="centered  card_form">
      <form class="phone_form" action="">
          <label class="phone_form_text " for="">Введіть номер телефону</label>
          <div class="phone_input_wrap">
            <input @input ="showOperator" class="phone_form_input form_input_first" type="text" maxlength="9">
            <div class="error phone_error"></div>
          </div>
          <label class="phone_form_text" for="">Введіть суму поповнення</label>
          <input id="price-input" class="phone_form_input form_input_last" type="text">
          <div class="error price_error">Невірний код оператора</div>
          <div class="value_buttons">
            <p class="value_but" @click="setValue">50 грн</p>
            <p class="value_but" @click="setValue">100 грн</p>
            <p class="value_but" @click="setValue">200 грн</p>
          </div>
          <button  class="tariff_link" @click="checkData">
              Продовжити
          </button>
      </form>
    </div>
    <div class="tip_block">
        <div class="tips">
        <p class="tips_text">Оплатити можна за 3 простих кроки:</p>
        <ul class="tips_list">
          <li class="tips_list_item">Введіть дані об оплаті;</li>
          <li class="tips_list_item">Перевірте коректність даних;</li>
          <li class="tips_list_item">Внесіть дані платіжної картки.</li>
        </ul>
      </div>
      <div class="img_wrap">
        <img src="https://ibox.ua/public/img/img_blog/image_mobile.svg" class="tip_block_pic">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"PayPage",
  components: {

  },
   data() {
    return {
      operators: [],
      errors: [],
      isCodeValid: false,
      isPhoneValid: false,
      currentOperatorId: "",
    };
  },
  methods: {
    setValue(e) {
      const value = e.target.textContent.split(" ")[0];
      this.$el.querySelector("#price-input").value = value;
    },
    showOperator(e) {
      const value = e.target.value;
      const logo = this.$el.querySelector(".phone_input_wrap").style;
      const phoneError = this.$el.querySelector(".phone_error");
      if (value.length === 2) {
        let currentOperator = this.operators.find((op) => op.code === value);
        if (currentOperator) {
          logo.setProperty("--background", `url(../${currentOperator.id}.png)`);
          this.currentOperatorId = currentOperator.id;
          phoneError.style.display = "none";
          this.isCodeValid = true;
        } else {
          this.isCodeValid = false;
          phoneError.textContent = "Невірний код оператора";
          phoneError.style.display = "block";
        }
      }
      if (value.length < 2) {
        logo.setProperty("--background", `none`);
      }
    },
    checkData() {
      const phoneError = this.$el.querySelector(".phone_error");
      const priceError = this.$el.querySelector(".price_error");
      const priceInput = this.$el.querySelector("#price-input").value;
      const phoneInput = this.$el.querySelector(".phone_form_input");

      if (phoneInput.value.length === 9) {
        this.isPhoneValid = true;
      } else {
        this.isPhoneValid = false;
        phoneError.textContent = "Невірний номер";
        phoneError.style.display = "block";
      }
      if (priceInput) {
        priceError.style.display = "none";
      } else {
        priceError.textContent = "Ви не ввели суму поповнення";
        priceError.style.display = "block";
      }
      if (this.isPhoneValid && priceInput && this.isCodeValid) {
        localStorage.setItem(
          "transactionData",
          JSON.stringify({
            operatorId: this.currentOperatorId,
            phone: `+38${phoneInput.value}`,
            totalValue: priceInput,
          })
        );
        router.push("/pay/card");
      }
    },
  },

  created() {
    axios
      .get(
        `http://kursovoiproject/api/getOperators?auth=dIC349vWSpXx234NmQP21rvIeDd`
      )
      .then((response) => {
        this.operators = response.data;
      })
      .catch((e) => {
        alert(e);
      });
  }
}

</script>

<style>

</style>