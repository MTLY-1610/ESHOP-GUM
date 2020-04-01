import * as React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartContext,
  ShoppingCartConsumer
} from "../contexts/CartContext";
import { CartItem } from "../contexts/CartContext";

export interface Props {}

export interface State {}

class TotalBox extends React.Component<Props, State> {
  render() {
    return (
      <ShoppingCartConsumer>
        {value =>
          value.shoppingCart.length === 0 ? (
            <></>
          ) : (
            <>
              <div className="header-total">
                <h3>Total</h3>
              </div>
              <div className="subheader-total">
                <p>Sub-total:</p>
                <p>
                  {value.totalAmount() === 0
                    ? 0
                    : value.totalAmount() - value.shipping()}
                  $
                </p>
              </div>
              <div className="subheader-total">
                <p>Shipping:</p>
                <p>
                  {value.shipping() === 0 ? "Free" : value.shipping() + "$"}
                </p>
              </div>
              <div className="total-total">
                <p>Total:</p>
                <p>{value.totalAmount()}$</p>
              </div>
              <div className="paymentbutton">
                <Link to="/payment">
                  <button>CHECKOUT</button>
                </Link>
              </div>
            </>
          )
        }
      </ShoppingCartConsumer>
    );
  }
}

export default TotalBox;

TotalBox.contextType = ShoppingCartContext;
