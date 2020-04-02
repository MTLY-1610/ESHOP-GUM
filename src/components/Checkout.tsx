import * as React from "react";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { CheckoutConsumer } from "../contexts/CheckoutContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export interface Props {}

export interface State {}

class Checkout extends React.Component<Props, State> {
  render() {
    return (
      <div className="checkout-flex">
        <CheckoutConsumer>
          {value => (value.fullname === "" ? <></> : <h3>Order summary</h3>)}
        </CheckoutConsumer>
        <ShoppingCartConsumer>
          {value =>
            value.shoppingCart.length === 0 ? (
              <></>
            ) : (
              value.shoppingCart.map(cartRow => (
                <div className="checkout-products">
                  <div className="checkout-products-brandmodel">
                    <h4>{cartRow.product.brand}</h4>
                    <h5>{cartRow.product.model}</h5>
                  </div>
                  <h5>{cartRow.product.price}</h5>
                </div>
              ))
            )
          }
        </ShoppingCartConsumer>
        <ShoppingCartConsumer>
          {value =>
            value.shoppingCart.length === 0 ? (
              <></>
            ) : (
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
                  <h5>{value.totalAmount() + Number(value.shippingAmount)}$</h5>
                </div>
              </div>
            )
          }
        </ShoppingCartConsumer>
        <CheckoutConsumer>
          {value =>
            value.fullname === "" ? (
              <></>
            ) : (
              <div className="checkout-delivery-payment-wrapper">
                <div className="checkout-delivery">
                  <h3>Delivery</h3>
                  <h5>{value.fullname}</h5>
                  <h5>{value.adress}</h5>
                  <h5>
                    {value.city}, {value.country}
                  </h5>
                </div>
                <div className="checkout-payment">
                  <h3>Payment details</h3>
                  <h5>{value.fullname}</h5>
                  {value.cardNr.length !== 4 ? (
                    <></>
                  ) : (
                    <>
                      <h5>XXXX-XXXX-XXXX-{value.cardNr}</h5>
                      <h5>{value.expireDay}</h5>
                    </>
                  )}
                </div>
              </div>
            )
          }
        </CheckoutConsumer>
        <CheckoutConsumer>
          {value =>
            value.fullname === "" ? (
              <h1>
                NOTHING IN YOUR SUMMARY, GO TO{" "}
                <Link to="/products">PRODUCTS</Link>
              </h1>
            ) : (
              <Link to="/confirmation">
                <Button>Confirm order</Button>
              </Link>
            )
          }
        </CheckoutConsumer>
      </div>
    );
  }
}

export default Checkout;
