import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../redux/actions/product.actions";
import Reviews from "../Reviews/Reviews";
import Rating from "@material-ui/lab/Rating";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as API from "../../utils/api";
import styles from "./Product.module.css";

const Product = () => {
  const { productId } = useParams();

  const { products, productDetails } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadProductById = (id) => {
      dispatch(selectProduct(id));
      console.log(productDetails);
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
          <div>
            <img src={`${API.ASSETS_URL}/${productDetails.img} `} />
          </div>
          <div>
            <h1>{productDetails.title}</h1>
            <Rating name="disabled" value="5" disabled />
            <div>{productDetails.text}</div>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Product;
