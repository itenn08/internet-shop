import React from "react";
import { Comment } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";
import PropTypes from "prop-types";

const Reviews = (props) => (
  <Comment>
    <Comment.Content>
      <Comment.Author>{props.name}</Comment.Author>
      <Comment.Metadata>
        <div>{props.date}</div>
      </Comment.Metadata>
      <Comment.Text>{props.text}</Comment.Text>
      <Rating icon="star" rating={props.rating} maxRating={5} disabled />
    </Comment.Content>
  </Comment>
);

Reviews.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.string,
};

export default Reviews;
