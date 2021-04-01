import store from "../redux/store";
import postReview from "./postReview";
import { getReviewsById } from "../redux/actions/reviews.actions";

const postAndGetReview = async ({ rate, text, id }) => {
  await postReview({ rate, text, id });

  store.dispatch(getReviewsById(id));
};

export default postAndGetReview;
