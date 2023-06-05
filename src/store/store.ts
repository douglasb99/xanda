import { createStore } from "redux";
import { productData } from "../productData";

export type ProductItemProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export type AppState = {
  products: ProductItemProps[];
  basket: ProductItemProps[];
  totalValue: number;
};

const initialState: AppState = {
  products: productData,
  basket: [],
  totalValue: 0,
};

type AddProductAction = {
  type: "BASKET_ADD";
  payload: ProductItemProps;
};

type RemoveProductAction = {
  type: "BASKET_REMOVE";
  payload: ProductItemProps;
};

type Action = AddProductAction | RemoveProductAction;

const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case "BASKET_ADD": {
      const newProduct = action.payload;
      const newTotalValue = state.totalValue + newProduct.price;
      return {
        ...state,
        basket: [...state.basket, newProduct],
        totalValue: newTotalValue,
      };
    }
    case "BASKET_REMOVE": {
      const deletedProduct = action.payload;
      const newTotalValue = state.totalValue - deletedProduct.price;
      return {
        ...state,
        basket: state.basket.filter(
          (product) => product.id !== action.payload.id
        ),
        totalValue: newTotalValue,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
