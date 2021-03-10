import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import styles from "./ReviewsItem.module.css";

const Reviews = (props) => {
  const date = moment
    .utc(props.review.created_at)
    .local()
    .startOf("seconds")
    .fromNow();

  return (
    <div className={styles.reviewsItem}>
      <Avatar className={styles.orange}>
        {props.review.created_by.username[0]}
      </Avatar>
      <div className={styles.reviewsItemDetails}>
        <div className={styles.reviewsItemName}>
          {props.review.created_by.username}
        </div>
        <Rating name="reviewTotal" value={props.review.rate} disabled />
        {props.review.text}
        <div className={styles.reviewItemDate}>{date}</div>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  review: PropTypes.object,
};

export default Reviews;
