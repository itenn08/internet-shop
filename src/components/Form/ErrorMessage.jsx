import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

const TextError = (props) => (
  <div className={styles.error}>{props.children}</div>
);

TextError.propTypes = {
  children: PropTypes.string,
};

export default TextError;
