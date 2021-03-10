import { combineReducers } from "redux";
import products from "./products.reducer";
import reviews from "./reviews.reducer";

export default combineReducers({
  products,
  reviews,
});
