import { Action } from "redux";
import { AppState, ProductItemProps } from "./store";

export const addProduct = (product: ProductItemProps) => {
  return {
    type: "BASKET_ADD",
    payload: product,
  };
};

export const removeProduct = (product: ProductItemProps) => {
  return {
    type: "BASKET_REMOVE",
    payload: product,
  };
};
