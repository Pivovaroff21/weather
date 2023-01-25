import { CityInfo , Home, Page404 }  from "../views"

const routes = [
  { path: "/", component: Home },
  {
    path: "/weather/:city",
    component: CityInfo,
    props: true,
  },
  {
    path:"/:catchAll(.*)",
    component:Page404,
    hidden:true,
  }
];
export{routes};