import * as React from "react";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { CheckoutConsumer } from "../contexts/CheckoutContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { History, LocationState } from "history";
import Confirmation from "./Confirmation";

export interface Props {}

export interface State {
  confirmation: boolean;
}

class Checkout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      confirmation: false,
    };
  }
  delayConfirmation = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTimeout(() => {
      this.setState({ confirmation: true });
    }, 1000);
  };

  render() {
    if (this.state.confirmation === true) {
      return <Confirmation />;
    } else {
      return (
        <ShoppingCartConsumer>
          {(value) =>
            value.shoppingCart.length === 0 ? (
              <div style={flex}>
                <h1>
                  Nothing in your summary, go back to{" "}
                  <Link to="/products">Products</Link>
                </h1>
              </div>
            ) : (
              <div className="checkout-flex">
                <h3>Order summary</h3>
                <ShoppingCartConsumer>
                  {(value) =>
                    value.shoppingCart.map((cartRow) => (
                      <div className="checkout-products">
                        <div className="checkout-products-brandmodel">
                          <h4>{cartRow.product.brand}</h4>
                          <h5>{cartRow.product.model}</h5>
                        </div>
                        <h5>{cartRow.product.price}$</h5>
                      </div>
                    ))
                  }
                </ShoppingCartConsumer>
                <ShoppingCartConsumer>
                  {(value) => (
                    <div className="checkout-shipping-total-wrapper">
                      <div className="checkout-shipping">
                        <h5>Shipping</h5>
                        <div className="checkout-shipping-date">
                          <h5> {value.shippingAmount}$</h5>
                          <h5> {value.date}</h5>
                        </div>
                      </div>
                      <div className="checkout-total">
                        <h5>Total</h5>
                        <h5>
                          {value.totalAmount() + Number(value.shippingAmount)}$
                        </h5>
                      </div>
                    </div>
                  )}
                </ShoppingCartConsumer>
                <CheckoutConsumer>
                  {(value) => (
                    <div className="checkout-delivery-payment-wrapper">
                      <div className="checkout-delivery">
                        <h5>Delivery</h5>
                        <h5>{`${value.firstname} ${value.lastname}`}</h5>
                        <h5>{value.adress}</h5>
                        <h5>
                          {value.city}, {value.country}
                        </h5>
                      </div>
                      <div className="checkout-payment">
                        <h5>Payment details</h5>
                        <h5>{`${value.firstname} ${value.lastname}`}</h5>
                        {value.cardnumber.length !== 4 ? (
                          <></>
                        ) : (
                          <>
                            <h5>XXXX-XXXX-XXXX-{value.cardnumber}</h5>
                            <h5>{value.validdate}</h5>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </CheckoutConsumer>

                <button
                  style={button}
                  onClick={this.delayConfirmation}
                  id="next-button"
                >
                  CONFIRM ORDER
                </button>
              </div>
            )
          }
        </ShoppingCartConsumer>
      );
    }
  }
}

const flex: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  height: "100%",
};
const button: React.CSSProperties = {
  padding: "1rem",
  border: "none",
};

export default Checkout;
