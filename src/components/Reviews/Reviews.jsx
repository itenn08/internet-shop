import React from "react";
import ReviewsItem from "./ReviewsItem";

const Reviews = () => (
  <>
    <h1>Reviews</h1>
    <div className="reviewsContainer">
      <ReviewsItem
        name="Alex"
        text="Cool product!"
        date="01.03.2021"
        rating="3"
      />
      <ReviewsItem
        name="Kostya"
        text="Bad product!"
        date="01.02.2021"
        rating="1"
      />
      <ReviewsItem
        name="Oleg"
        text="The best product!"
        date="01.01.2021"
        rating="5"
      />
    </div>
  </>
);

export default Reviews;
