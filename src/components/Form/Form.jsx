import React from "react";
import PropTypes from "prop-types";
import { Form as FormikForm, Formik } from "formik";

const Form = ({initialValues, onSubmit, validationSchema,children,validationOnChange = false, validationOnBlur = false, ...props}) => (
  <Formik
    initialValues={initialValues}
    validationOnChange={validationOnChange}
    validationOnBlur={validationOnBlur}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => <FormikForm {...props}>{children}</FormikForm>}
  </Formik>
);

Form.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  validationOnChange: PropTypes.bool,
  validationOnBlur: PropTypes.bool,
};

export default Form; 
