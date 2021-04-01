import api from "../utils/api";
import store from "../redux/store";
import { getReviewsById } from "../redux/actions/reviews.actions";

function UserException(message) {
  this.message = message;
  this.name = "Error";
}

const postReview = async ({ rate, text, id }) => {
  const response = await api.post(`/reviews/${id}`, { rate, text });

  if (!response.data.success) {
    throw new UserException(response.data.message);
  }
  store.dispatch(getReviewsById(id));
};

export default postReview;
