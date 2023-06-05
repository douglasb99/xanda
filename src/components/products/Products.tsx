import "./../../sass/app.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/actions";
import { AppState } from "../../store/store";
import { isInBasket } from "../../store/utils/isInBasket";
import styles from "./products.module.scss";
import Nav from "../nav/nav";
import classNames from "classnames";
const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.products);
  const basket = useSelector((state: AppState) => state.basket);

  const handleAddProduct = (product) => {
    if (!isInBasket(product, basket)) {
      dispatch(addProduct(product));
    }
  };

  return (
    <div className={styles.background}>
      <Nav />
      <div className={styles.content}>
        <div>
          <img className={styles.logo} src={"/assets/logo.png"} alt={"logo"} />
        </div>
        <div className={styles.list}>
          {products.map((product) => (
            <div
              key={product.id}
              className={classNames(
                styles.item,
                isInBasket(product, basket) ? styles.overlay : ""
              )}
            >
              <img
                className={styles.left}
                src={product.image}
                alt={product.title}
              />
              <div>
                <div className={styles.right}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <button
                    onClick={() => handleAddProduct(product)}
                    disabled={isInBasket(product, basket)}
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
