import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsById } from "../../redux/actions/reviews.actions";
import ReviewsItem from "./ReviewsItem";
import LeaveFeedbackForm from "./LeaveFeedbackForm";

const Reviews = () => {
  const { productId } = useParams();
  const { reviews } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsById(productId));
  }, [productId]);

  if (!reviews) return <CircularProgress color="secondary" />;

  return (
    <>
      <h1>Reviews</h1>
      <LeaveFeedbackForm id={productId} />
      <div className="reviewsContainer">
        {reviews.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
