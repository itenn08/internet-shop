import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/actions/product.actions";
import Reviews from "../Reviews/Reviews";
import Rating from "@material-ui/lab/Rating";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as api from "../../utils/api";
import styles from "./Product.module.css";

const Product = () => {
  const { productId } = useParams();

  const { products, productDetails } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadProductById = (id) => {
      dispatch(getProductById(id));
    };

    if (products.length && productId) {
      loadProductById(productId);
    }
  }, [products, productId]);

  if (!productDetails) return <CircularProgress color="secondary" />;

  return (
    <div className={styles.container}>
      <div className="bigContainer">
        <div className={styles.main}>
          <img src={`${api.ASSETS_URL}/${productDetails.img}`} />
          <div>
            <h1>{productDetails.title}</h1>
            <Rating name="reviewTotal" value="5" disabled />
            <div>{productDetails.text}</div>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Product;
