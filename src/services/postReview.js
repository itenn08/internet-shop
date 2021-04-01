import api from "../utils/api";

function UserException(message) {
  this.message = message;
  this.name = "Error";
}

const postReview = async ({ rate, text, id }) => {
  const response = await api.post(`/reviews/${id}`, { rate, text });

  if (!response.data.success) {
    throw new UserException(response.data.message);
  }
};

export default postReview;
