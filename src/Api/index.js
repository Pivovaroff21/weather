import axios from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

class Api {
  constructor(url) {
    this.baseUrl = url;
    this.customApi = this.createApi();
  }

  async getData({city,lat,lon}) {

    try{

      const res = await this.customApi.get('/weather', {
        params: {
          q:city,
          lat,
          lon,
          units: "metric",
        },
      });

      return res.data;

    } catch(err){
      console.log(err);
      return Promise.reject(err);
    }



  }

   createApi() { // you should use instance of axios and set basic parametrs - baseURL, API_KEY and other, token etc
    const api = axios.create({
      baseURL: this.baseUrl,
      params: {appid: API_KEY}
    });
    return api;
  }

}
const api = new Api(BASE_URL);
export { api };
