const FinalPage = {
  data() {
    return {
      currentTransaction: [],
    };
  },
  methods: {},

  created() {
     axios
       .get(
         `http://kursovoiproject/api/getLastTransaction?auth=dIC349vWSpXx234NmQP21rvIeDd`
       )
       .then((response) => {
         this.currentTransaction = response.data;
       })
       .catch((e) => {
         this.errors.push(e);
       });

  },
  template: `
      <div class="wrapper">
        <div class="transaction">
          <div class="transactio_inner">
            <h1 class="transaction_id">Транзакція #{{this.currentTransaction.id}} </h1>
            <h2 class="transaction_text" v-if="this.currentTransaction.status === '1'" >Оплата проведена успішно</h2>
             <h2 class="transaction_text_red " v-else>Оплата не пройшла, не вистачає коштів</h2>
          </div>
        </div>
      </div>
       `,
};
