import React from "react";
import PropTypes from "prop-types";
import styles from "./ReviewsItem.module.css";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";

const Reviews = (props) => {
  const shortName = (name) => name.slice(0, 1);

  return (
    <div className={styles.reviewsItem}>
      <Avatar className={styles.orange}>{shortName(props.name)}</Avatar>
      <div className={styles.reviewsItemDetails}>
        <div className={styles.reviewsItemName}>{props.name}</div>
        <Rating name="disabled" value={props.rating} disabled />
        {props.text}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.string,
};

export default Reviews;
