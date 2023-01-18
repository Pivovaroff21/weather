import {PayCard,PayPage,FinalPage}  from "../Views"

const routes = [
  { path: "/", component: PayPage },
  {
    path: "/pay/card",
    component: PayCard,
  },
  {
    path: "/pay/final",
    component: FinalPage,
  },
];

export{routes};