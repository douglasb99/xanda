import "./../../sass/app.scss";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/actions";
import { AppState, ProductItemProps } from "../../store/store";
import styles from "./basket.module.scss";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const totalValue = useSelector((state: AppState) => state.totalValue);
  const basket = useSelector((state: AppState) => state.basket);

  const handleRemoveProduct = (product: ProductItemProps) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className={styles.sidebar}>
      <h2>Basket</h2>
      <div className={styles.wrapper}>
        {basket.length
          ? basket.map((product) => (
              <div key={product.id} className={styles.row}>
                <img
                  className={styles.product}
                  src={product.image}
                  alt={product.title}
                />
                <div className={styles.right}>
                  <div className={styles.stacked}>
                    <span>{product.title}</span>
                    <span>
                      <img
                        className={styles.coins}
                        src={"/assets/coins.png"}
                        alt={"coins"}
                      />
                      ${product.price}
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => handleRemoveProduct(product)}
                  className={styles.bin}
                  src={"/assets/bin.png"}
                  alt={"bin"}
                />
              </div>
            ))
          : "No items in basket"}
        <div></div>
        <div className={styles.checkout}>
          <div className={styles.total}>
            total price : <span className={styles.right}>{totalValue} GLL</span>
          </div>
          <button className={styles.continue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
