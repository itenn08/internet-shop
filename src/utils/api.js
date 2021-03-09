import axios from "axios";
export const ASSETS_URL = "http://smktesting.herokuapp.com/static";
export const API_URL = "http://smktesting.herokuapp.com/api";

export default axios.create({
  baseURL: API_URL,
});
