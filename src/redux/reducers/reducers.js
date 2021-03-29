import { combineReducers } from "redux";
import products from "./products.reducer";
import reviews from "./reviews.reducer";
import user from "./user.reducer";

export default combineReducers({
  products,
  reviews,
  user,
});
