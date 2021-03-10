import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const { products, loading } = useSelector((state) => state.products);

  return (
    <div className={styles.container}>
      <div className="bigContainer">
        {loading ? (
          <div className={styles.loading}>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <div className={styles.gridProducts}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                img={product.img}
                title={product.title}
                id={product.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
