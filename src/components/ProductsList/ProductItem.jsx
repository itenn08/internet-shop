import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as api from "../../utils/api";
import styles from "./ProductItem.module.css";

const ProductItem = (props) => (
  <Link to={`product/${props.href} `}>
    <div className={styles.productItem}>
      <img src={`${api.ASSETS_URL}/${props.img}`} />
      <div className={styles.productItemTitle}>{props.title}</div>
    </div>
  </Link>
);

ProductItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.number,
};

export default ProductItem;
