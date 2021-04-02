import * as REVIEWS_TYPES from "../actions/reviews.types";

const initialState = {
  reviews: [],
  rateTotal: 0,
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

      const sortedReviews = action.payload.sort((a, b) =>
        a.created_at < b.created_at ? 1 : -1
      );

      return {
        ...state,
        reviews: sortedReviews,
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

    case REVIEWS_TYPES.POST_AND_GET_REVIEW_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
