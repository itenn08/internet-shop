import React from "react";
import Testmonails from "../Reviews/Reviews";
import { Rating } from "semantic-ui-react";
import styles from "./Product.module.css";

const Product = () => (
  <div className={styles.container}>
    <div className="bigContainer">
      <div className={styles.main}>
        <div>
          <img src="http://smktesting.herokuapp.com/static/img1.png" />
        </div>
        <div>
          <h1>Title</h1>
          <Rating icon="star" defaultRating={3} maxRating={5} disabled />
          <div>Short Product Description</div>
        </div>
      </div>
      <Testmonails />
    </div>
  </div>
);

export default Product;
