import * as React from "react";
import { ShoppingCartConsumer } from "../contexts/CartContext";

export interface Props {}

export interface State {}

class Checkout extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h3>Order summary</h3>
        <ShoppingCartConsumer>
          {value =>
            value.shoppingCart.map(cartRow => (
              <div>
                <div>
                  <div>
                    <h4>{cartRow.product.brand}</h4>
                    <h5>{cartRow.product.model}</h5>
                  </div>
                  <h5>{cartRow.product.price}</h5>
                </div>
              </div>
            ))
          }
        </ShoppingCartConsumer>
        <ShoppingCartConsumer>
          {value => (
            <>
              <div>
                <h5>Shipping</h5>
                <h5>
                  {" "}
                  {value.shipping() === 0 ? "Free" : value.shipping() + "$"}
                </h5>
              </div>
              <div>
                <h5>Total</h5>
                <h5>{value.totalAmount()}$</h5>
              </div>
            </>
          )}
        </ShoppingCartConsumer>
      </div>
    );
  }
}

export default Checkout;
