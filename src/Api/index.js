import axios from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

class api {
  constructor(BASE_URL) {
    this.baseUrl = BASE_URL;
    this.customApi = this.createApi();
  }

  getWeatherInfo(currentCity) {
    return Api.customApi("/getOperators", {
      method: "GET",
      params: {
        "q": currentCity,
        "appid":API_KEY
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

const Api = new api(BASE_URL);

export { Api };
