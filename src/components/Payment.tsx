import * as React from "react";
import DeliveryForm from "./Delivery";
import CreditCard from "./CreditCard";
import PresentCard from "./PresentCard";
import Swish from "./Swish";
import { Link } from "react-router-dom";
import PaymentDeliveryMethod from "./PaymentDeliveryMethods";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import TotalBox from "./TotalInCart";

export interface Props {}

export interface State {
  creditCard: boolean;
  swish: boolean;
  presentCard: boolean;
  delivery: boolean;
  ccv: boolean;
  validDay: boolean;
  validMonth: boolean;
  name: boolean;
  city: boolean;
  country: boolean;
}

class Payment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      creditCard: false,
      swish: false,
      presentCard: false,
      delivery: false,
      ccv: false,
      validMonth: false,
      validDay: false,
      name: false,
      city: false,
      country: false
    };
  }

  validDateValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.indexOf("/") !== -1) {
    } else {
    }
  };

  onlyLetter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const x = event.which || event.keyCode;
    if ((x >= 45 && x <= 57) || (x >= 96 && x <= 105)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  onlyNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const x = event.which || event.keyCode;
    if (x >= 65 && x <= 90) {
      event.preventDefault();
      return "false";
    } else {
      return "true";
    }
  };

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
  paymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (event.target.value === "CreditCard") {
      this.setState({ creditCard: true });
      this.setState({ swish: false });
      this.setState({ presentCard: false });
    } else if (event.target.value === "Swish") {
      this.setState({ swish: true });
      this.setState({ creditCard: false });
      this.setState({ presentCard: false });
    } else if (event.target.value === "PresentCard") {
      this.setState({ presentCard: true });
      this.setState({ creditCard: false });
      this.setState({ swish: false });
    }
  };

  render() {
    if (this.state.swish !== true && this.state.presentCard !== true) {
      return (
        <div className="payment-layout">
          <PaymentDeliveryMethod
            checkPayment={this.paymentMethod}
            checkDelivery={this.deliveryMethod}
          />
          <div className="delivery-creditcard-form">
            <DeliveryForm checkDelivery={this.deliveryMethod} />
            <CreditCard onlyNumber={this.onlyNumber} />
          </div>
        </div>
      );
    } else if (this.state.swish === true) {
      return (
        <div className="payment-layout">
          <PaymentDeliveryMethod
            checkPayment={this.paymentMethod}
            checkDelivery={this.deliveryMethod}
          />
          <div className="delivery-creditcard-form">
            <DeliveryForm checkDelivery={this.deliveryMethod} />
            <Swish onlyNumber={this.onlyNumber} />
          </div>
        </div>
      );
    } else if (this.state.presentCard === true) {
      return (
        <div className="payment-layout">
          <PaymentDeliveryMethod
            checkPayment={this.paymentMethod}
            checkDelivery={this.deliveryMethod}
          />
          <div className="delivery-creditcard-form">
            <DeliveryForm checkDelivery={this.deliveryMethod} />
            <PresentCard />
          </div>
        </div>
      );
    }
  }
}
export default Payment;
