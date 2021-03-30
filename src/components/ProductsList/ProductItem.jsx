import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as api from "../../utils/api";
import styles from "./ProductItem.module.css";

const ProductItem = ({ id, img, title }) => (
  <Link to={`product/${id}`}>
    <div className={styles.productItem}>
      <img src={`${api.ASSETS_URL}/${img}`} />
      <div className={styles.productItemTitle}>{title}</div>
    </div>
  </Link>
);

ProductItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};

export default ProductItem;
