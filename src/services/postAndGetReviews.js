import store from "../redux/store";
import api from "../utils/api";
import { getReviewsById } from "../redux/actions/reviews.actions";

function UserException(message) {
  this.message = message;
  this.name = "Error";
}

export const postAndGetReview = async ({ rate, text, id }) => {
  await postReview({ rate, text, id });

  store.dispatch(getReviewsById(id));
};

export const postReview = async ({ rate, text, id }) => {
  const response = await api.post(`/reviews/${id}`, { rate, text });

  if (!response.data.success) {
    throw new UserException(response.data.message);
  }
};

export const getReviews = (id) =>
  api.get(`/reviews/${id}`).then((response) => response.data);
