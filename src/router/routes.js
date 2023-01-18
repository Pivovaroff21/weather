import {CityInfo,Home}  from "../Views"

const routes = [
  { path: "/", component: Home },
  {
    path: "/city/info/:city",
    component: CityInfo,
    props:true
  },
];

export{routes};