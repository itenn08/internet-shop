import * as PRODUCT_TYPES from "./product.types";
import getProducts from "../../services/products";

export const loadProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_TYPES.LOAD_PRODUCTS_PENDING });

  try {
    const products = await getProducts();
    dispatch({
      type: PRODUCT_TYPES.LOAD_PRODUCTS_FULFILLED,
      payload: Object.values(products),
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_TYPES.LOAD_PRODUCTS_REJECTED,
      payload: err.message,
    });
  }
};

export const selectProduct = (product) => ({
  type: PRODUCT_TYPES.SELECT_PRODUCT,
  payload: product,
});
