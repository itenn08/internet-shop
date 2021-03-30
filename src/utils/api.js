import axios from "axios";
import store from "../redux/store";
import { STORAGE_TOKEN } from "../constants/storage";
export const ASSETS_URL = "http://smktesting.herokuapp.com/static";
export const API_URL = "http://smktesting.herokuapp.com/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
  function (response) {
    const token = localStorage.getItem(STORAGE_TOKEN);
    if (token) {
      store.dispatch({ type: "LOGIN" });
    }

    return response;
  },

  function (error) {
    window.location.href = "/logout";
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_TOKEN);
    if (token) {
      config.headers.authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
