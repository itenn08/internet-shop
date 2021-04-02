import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import Rating from "@material-ui/lab/Rating";
import TextError from "./ErrorMessage";

const RatingInput = ({ name }) => {
  const [field] = useField(name);

  return (
    <>
      <Rating {...field} />
      <ErrorMessage component={TextError} name={name} />
    </>
  );
};

RatingInput.propTypes = {
  name: PropTypes.string,
};

export default RatingInput;
