import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import Basket from "./components/basket/Basket";
import Products from "./components/products/Products";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className={"container"}>
        <Products />
        <Basket />
      </div>
    </Provider>
  </React.StrictMode>
);
