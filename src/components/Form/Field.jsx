/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const Field = (props) => {
  const {name, renderComponent: CustomComponent, children, ...restProps} = props;

  const [field, meta] = useField(name);

  return(
    <CustomComponent 
      {...field}
      helperText = {meta.touched && meta.error}
      error = {meta.touched && Boolean(meta.error)}
      {...restProps} />
  );
};

Field.propTypes = {
  name: PropTypes.string,
};

export default Field;
