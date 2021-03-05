import * as PRODUCT_TYPES from "../actions/product.types";

const initialState = {
  productDetails: null,
  products: [],
  loading: true,
  error: null,
};

export default function productsList(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_TYPES.LOAD_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_TYPES.LOAD_PRODUCTS_FULFILLED:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case PRODUCT_TYPES.LOAD_PRODUCTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case PRODUCT_TYPES.SELECT_PRODUCT: {
      const selectProduct = state.products.find(
        (products) => products.id == action.payload
      );
      return {
        ...state,
        productDetails: selectProduct,
      };
    }
    default:
      return state;
  }
}
