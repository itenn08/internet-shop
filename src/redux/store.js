import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers/product.reducer";

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
