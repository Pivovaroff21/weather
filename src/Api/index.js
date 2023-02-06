import axios from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

class Api {
  constructor(url) {
    this.baseUrl = url;
  }

  async getData({city,lat,lon}) {

    try{

      const res = await axios.get(`${this.baseUrl}/weather`, {
        params: {
          q:city,
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
        },
      });

      return res.data;

    }catch(err){
      console.log(err);
      return Promise.reject(err);
    }



  }

}
const api = new Api(BASE_URL);
export { api };
