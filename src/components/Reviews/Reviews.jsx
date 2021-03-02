import React from "react";
import ReviewsItem from "./ReviewsItem";
import { Comment } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

const Reviews = () => (
  <div>
    <Header as="h2">Reviews</Header>
    <Comment.Group>
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
    </Comment.Group>
  </div>
);

export default Reviews;
