import API from "../utils/api";

const getProducts = () =>
  API.get("/products").then((response) => response.data);

export default getProducts;
