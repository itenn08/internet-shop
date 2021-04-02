import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { postAndGetReview } from "../../services/postAndGetReviews";
import Form from "../Form/Form";
import Field from "../Form/Field";
import RatingInput from "../Form/RatingInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ReviewsForm = ({ id }) => {
  const { isAuthorized } = useSelector((state) => state.user);
  const [reviewForm, showReviewForm] = useState(true);

  const validationSchema = Yup.object().shape({
    text: Yup.string().min(3, "Too Short!").required("Required"),
    rate: Yup.string("Please choice rating").required("Rating is required"),
  });

  const initialValues = {
    text: "",
    rate: "",
  };

  const onSubmit = (values) => {
    postAndGetReview({
      text: values.text,
      rate: values.rate,
      id,
    });

    showReviewForm(false);
  };

  if (!isAuthorized) return "Please login";

  if (!reviewForm)
    return <div className="containerText">Thanks for feedback</div>;

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="reviewsContainer"
    >
      <RatingInput name="rate" />
      <Field
        variant="outlined"
        placeholder="Text"
        name="text"
        margin="none"
        fullWidth
        renderComponent={TextField}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Send
      </Button>
    </Form>
  );
};

ReviewsForm.propTypes = {
  id: PropTypes.string,
};

export default ReviewsForm;
