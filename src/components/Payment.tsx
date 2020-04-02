import * as React from "react";
import DeliveryForm from "./Delivery";
import CreditCard from "./CreditCard";
import PresentCard from "./PresentCard";
import Swish from "./Swish";
import { Link } from "react-router-dom";
import PaymentMethods from "./PaymentMethods";
import DeliveryMethods from "./DeliveryMethods";
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
  checkIfTrue: () => boolean;
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
      checkIfTrue: this.checkIfTrue,
      name: false,
      city: false,
      country: false
    };
  }
  creditCardValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 4 && event.target.value.length !== 0) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ creditCard: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ creditCard: true });
    }
  };
  nameValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 1) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ name: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ name: true });
    }
  };
  cityValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 1) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ city: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ city: true });
    }
  };
  countryValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 3) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ country: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ country: true });
    }
  };
  validDateValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.indexOf("/") !== -1) {
    } else {
    }
  };

  ccvValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 3 && event.target.value.length !== 0) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ ccv: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ ccv: true });
    }
  };

  checkIfTrue = () => {
    if (
      this.state.ccv === true &&
      this.state.creditCard === true &&
      this.state.validDay === true &&
      this.state.validMonth === true &&
      this.state.name === true &&
      this.state.city === true &&
      this.state.country === true
    ) {
      return false;
    } else {
      return true;
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
          <div className="delivery-box">
          <DeliveryMethods
            
            checkDelivery={this.deliveryMethod}
          />
          <DeliveryForm checkDelivery={this.deliveryMethod} />
          
          </div>
         <div className="payment-box">
         <PaymentMethods
            checkPayment={this.paymentMethod}
            
          />
            
            <CreditCard onlyNumber={this.onlyNumber} />
          </div>
        </div>
      );
    } else if (this.state.swish === true) {
      return (
        <div className="payment-layout">
          <div className="delivery-box">
          <DeliveryMethods
            
            checkDelivery={this.deliveryMethod}
          />
          <DeliveryForm checkDelivery={this.deliveryMethod} />
          
          </div>
         <div className="payment-box">
         <PaymentMethods
            checkPayment={this.paymentMethod}
            
          />
            
            <Swish onlyNumber={this.onlyNumber} />

          </div>
        </div>
    
      );
    } else if (this.state.presentCard === true) {
      return (
        <div className="payment-layout">
        <div className="delivery-box">
        <DeliveryMethods
          
          checkDelivery={this.deliveryMethod}
        />
        <DeliveryForm checkDelivery={this.deliveryMethod} />
        
        </div>
       <div className="payment-box">
       <PaymentMethods
          checkPayment={this.paymentMethod}
          
        />
          
            <PresentCard />

        </div>
      </div>
         
          
      );
    }
  }
}
export default Payment;
