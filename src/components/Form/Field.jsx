import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const Field = (props) => {
  const { name, renderComponent: CustomComponent, ...restProps } = props;
  const [field, meta] = useField(name);

  return (
    <CustomComponent
      {...field}
      helperText={meta.touched && meta.error}
      error={meta.touched && Boolean(meta.error)}
      {...restProps}
      margin="normal"
    />
  );
};

Field.propTypes = {
  name: PropTypes.string,
  renderComponent: PropTypes.elementType,
};

export default Field;
