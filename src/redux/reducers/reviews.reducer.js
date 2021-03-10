import * as REVIEWS_TYPES from "../actions/reviews.types";

const initialState = {
  reviews: [],
  rateTotal: [],
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

    case REVIEWS_TYPES.LOAD_REVIEWS_FULFILLED: {
      const total = action.payload.reduce(
        (prevValue, currentValue) => prevValue + currentValue.rate,
        0
      );

      return {
        ...state,
        reviews: action.payload,
        rateTotal: total / action.payload.length,
        loading: false,
        error: null,
      };
    }

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
