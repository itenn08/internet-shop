import React from "react";
import PropTypes from "prop-types";

const TextError = (props) => <div className="error">{props.children}</div>;

TextError.propTypes = {
  children: PropTypes.string,
};

export default TextError;
