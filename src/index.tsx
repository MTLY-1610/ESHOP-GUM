import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import { ShoppingCartProvider } from "./contexts/CartContext";
import { CheckoutProvider } from "./contexts/CheckoutContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ProductProvider>
    <ShoppingCartProvider>
      <CheckoutProvider>
        <Route>
          <App />
        </Route>
      </CheckoutProvider>
    </ShoppingCartProvider>
  </ProductProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
