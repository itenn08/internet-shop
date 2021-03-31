import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { postReview } from "../../services/reviews";
import Form from "../Form/Form";
import Field from "../Form/Field";
import RatingInput from "../Form/RatingInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ReviewsForm = ({ id }) => {
  const { isAuthorized } = useSelector((state) => state.user);

  const validationSchema = Yup.object().shape({
    text: Yup.string().min(3, "Too Short!").required("Required"),
    rate: Yup.string("Please choice rating").required("Rating is required"),
  });

  const initialValues = {
    text: "",
    rate: "",
  };

  const onSubmit = (values) => {
    postReview({
      text: values.text,
      rate: values.rate,
      id,
    });
  };

  return (
    <>
      {isAuthorized ? (
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          className="reviewsContainer"
        >
          <Field
            variant="outlined"
            placeholder="Text"
            name="text"
            margin="none"
            fullWidth
            renderComponent={TextField}
          />
          <RatingInput name="rate" />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Send
          </Button>
        </Form>
      ) : (
        "please login"
      )}
    </>
  );
};

ReviewsForm.propTypes = {
  id: PropTypes.string,
};

export default ReviewsForm;
