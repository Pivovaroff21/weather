







const PayCard = {
  data() {
    return {
      cards: [],
      tariff: {},
      errors: [],
      transaction: [],
    };
  },
  methods: {
    checkData(e) {
      e.preventDefault();
      const cardNumber = this.$el.querySelector("#card_number");
      const cardDate = this.$el.querySelector("#card_date");
      const cardCvv = this.$el.querySelector("#card_cvv");
      const dateError = this.$el.querySelector(".date_error");
      let dateParsed = cardDate.value.split("/");
      let isCardDate = false;
      let isCardCvv = false;

      let currentCard = this.cards.find(function (card) {
        if (card.card_number === cardNumber.value) return card;
      });

      if (currentCard) {
        isCardCvv = currentCard["c_cvv"] === cardCvv.value;
        if (
          currentCard["c_month"] === dateParsed[0] &&
          currentCard["c_year"] === dateParsed[1]
        ) {
          isCardDate = true;
        } else {
          isCardDate = false;
        }
      }

      let transactionData = JSON.parse(localStorage.getItem("transactionData"));
      transactionData.date = new Date().toLocaleString();

      if(Number(currentCard.balance) < Number(transactionData.totalValue)){
        transactionData.status = "0";
      }else{
        transactionData.status = "1";
      }

      if (currentCard && isCardCvv && isCardDate) {
        let formData = new FormData();
        if(transactionData){
          for(let i in transactionData){
            formData.append(i, transactionData[i]);
          }
        }

        axios
          .post(
            "http://kursovoiproject/api/newTransaction?auth=dIC349vWSpXx234NmQP21rvIeDd",
            formData
          )
          .then(function () {
            dateError.style.display = "none";
            router.push("/pay/final");
          })
          .catch(function (error) {
            console.log(error);
          });

      } else {
        dateError.textContent = "Перевірте правильність даних";
        dateError.style.display = "block";
      }
    }
  },
  created() {
    axios
      .get(
        `http://kursovoiproject/api/getCards?auth=dIC349vWSpXx234NmQP21rvIeDd`
      )
      .then((response) => {
        this.cards = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  template: `
    <div class="wrapper_form">
      <div class="centered">
          <form class="phone_form card_form" action="">
              <label class="phone_form_text " for="">Введіть номер картки</label>
              <input id="card_number" class="phone_form_input form_input_last" type="text" maxlength="16">
              <label class="phone_form_text" for="">Введіть термін дії </label>
              <input id ="card_date" @input="checkDate" class="phone_form_input form_input_last" type="text" maxlength="5">
              <label class="phone_form_text" for="">Введіть CVV </label>
              <input id ="card_cvv" class="phone_form_input form_input_last" type="text" maxlength="3">
              <div class="error date_error"></div>
            <button @click="checkData" class="tariff_link">
                Оплатити
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
            <img src="https://ibox.ua/public/img/img_blog/image_mobile.svg" class="tip_block_pic"/>
          </div>
        </div>
      </div>
       `,
};