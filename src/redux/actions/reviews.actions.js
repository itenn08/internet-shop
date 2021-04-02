import * as REVIEWS_TYPES from "./reviews.types";
import { getReviews } from "../../services/reviews";

export const getReviewsById = (id) => async (dispatch) => {
  dispatch({ type: REVIEWS_TYPES.LOAD_REVIEWS_PENDING });

  try {
    const reviews = await getReviews(id);

    dispatch({
      type: REVIEWS_TYPES.LOAD_REVIEWS_FULFILLED,
      payload: Object.values(reviews),
    });
  } catch (err) {
    dispatch({
      type: REVIEWS_TYPES.LOAD_REVIEWS_REJECTED,
      payload: err.message,
    });
  }
};
