import * as React from "react";
import DeliveryForm from "./Delivery";
import CreditCard from "./CreditCard";
import PresentCard from "./PresentCard";
import Checkout from "./Checkout";
import Swish from "./Swish";
import { Link } from "react-router-dom";
import PaymentMethods from "./PaymentMethods";
import DeliveryMethods from "./DeliveryMethods";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import TotalBox from "./TotalInCart";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {}

export interface State {
  creditCard: boolean;
  swish: boolean;
  presentCard: boolean;
  delivery: boolean;
}

class Payment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      creditCard: false,
      swish: false,
      presentCard: false,
      delivery: false,
    };
  }

  deliveryMethod = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (
      event.target.value === "Free" ||
      event.target.value === "Regular" ||
      event.target.value === "Express"
    ) {
      this.setState({ delivery: true });
    }
  };
  render() {
    return (
      <CheckoutConsumer>
        {(value) =>
          value.noError === true ? (
            <Checkout />
          ) : value.swish !== true &&
            value.presentCard !== true &&
            value.creditCard !== true ? (
            <div className="payment-layout">
              <div className="delivery-box">
                <DeliveryMethods checkDelivery={this.deliveryMethod} />
                <DeliveryForm checkDelivery={this.deliveryMethod} />
              </div>
              <div className="payment-box">
                <PaymentMethods />
              </div>
            </div>
          ) : value.swish === true ? (
            <div className="payment-layout">
              <div className="delivery-box">
                <DeliveryMethods checkDelivery={this.deliveryMethod} />
                <DeliveryForm checkDelivery={this.deliveryMethod} />
              </div>
              <div className="payment-box">
                <PaymentMethods />
                <div className="adress-Recap">
                  <Swish />
                  <div className="buttonDiv">
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={value.onSubmit}
                        id="next-button"
                        variant="contained"
                        color="primary"
                      >
                        CHECK out
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : value.presentCard === true ? (
            <div className="payment-layout">
              <div className="delivery-box">
                <DeliveryMethods checkDelivery={this.deliveryMethod} />
                <DeliveryForm checkDelivery={this.deliveryMethod} />
              </div>
              <div className="payment-box">
                <PaymentMethods />
                <div className="adress-Recap">
                  <PresentCard />
                  <div className="buttonDiv">
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={value.onSubmit}
                        id="next-button"
                        variant="contained"
                        color="primary"
                      >
                        CHECK out
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : value.creditCard === true ? (
            <div className="payment-layout">
              <div className="delivery-box">
                <DeliveryMethods checkDelivery={this.deliveryMethod} />
                <DeliveryForm checkDelivery={this.deliveryMethod} />
              </div>
              <div className="payment-box">
                <PaymentMethods />
                <div className="adress-Recap">
                  <CreditCard />
                  <div className="buttonDiv">
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={value.onSubmit}
                        id="next-button"
                        variant="contained"
                        color="primary"
                      >
                        CHECKOUT
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        }
      </CheckoutConsumer>
    );
  }
}
export default Payment;
