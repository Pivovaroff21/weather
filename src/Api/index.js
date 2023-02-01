import axios from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

class Api {
  constructor(url) {
    this.baseUrl = url;
    this.customApi = this.createApi();
  }

  getData({city,lat,lon}) {

    return this.customApi("/weather", {
      method: "GET",
      params: {
        q:city,
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });
  }

  createApi() {
    const api = axios.create({
      baseURL: this.baseUrl,
    });

    return api;
  }
}
const api = new Api(BASE_URL);
export { api };
