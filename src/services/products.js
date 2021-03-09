import api from "../utils/api";

const getProducts = () =>
  api.get("/products").then((response) => response.data);

export default getProducts;
