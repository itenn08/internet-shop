import * as REVIEWS_TYPES from "../actions/reviews.types";

const initialState = {
  reviews: [],
  loading: true,
  error: null,
};

export default function productsList(state = initialState, action) {
  switch (action.type) {
    case REVIEWS_TYPES.LOAD_REVIEWS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case REVIEWS_TYPES.LOAD_REVIEWS_FULFILLED:
      return {
        ...state,
        reviews: action.payload,
        loading: false,
        error: null,
      };

    case REVIEWS_TYPES.LOAD_REVIEWS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
