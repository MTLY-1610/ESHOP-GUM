import * as React from "react";
import Checkout from "./Checkout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {}

export interface State {}

class Swish extends React.Component<Props, State> {
  onlyNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const x = event.which || event.keyCode;
    if (x >= 65 && x <= 90) {
      event.preventDefault();
      return "false";
    } else {
      return "true";
    }
  };

  render() {
    return (
      <CheckoutConsumer>
        {(value) => (
          <div className="payment-details">
            <h5 className="headers">SWISH DETAILS:</h5>
            <TextField
              type="name"
              name="Fullname"
              label="Full name"
              value={`${value.firstname} ${value.lastname}`}
            />
            <TextField
              type="tel"
              name="PhoneNumber"
              //   value={this.state.firstName}
              label="Phone Number"
              // onChange={this.handleChange}
              onKeyDown={this.onlyNumber}
              inputProps={{ maxLength: 10 }}
            />
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

export default Swish;
