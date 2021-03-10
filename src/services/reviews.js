import api from "../utils/api";

const getReviews = (id) =>
  api.get(`/reviews/${id}`).then((response) => response.data);

export default getReviews;
