import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { CheckoutConsumer } from "../contexts/CheckoutContext";
import Checkout from "./Checkout";

export interface Props {}

export interface State {
  ccv: string;
  cardnumber: string;
  validate: string;
}

class CreditCard extends React.Component<Props, State> {
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
            <h5 className="headers">CARD DETAILS:</h5>
            <TextField
              type="name"
              name="Fullname"
              label="Full name"
              value={`${value.firstname} ${value.lastname}`}
            />
            <TextField
              type="tel"
              name="cardnumber"
              label="Card Number"
              onKeyDown={this.onlyNumber}
              inputProps={{ maxLength: 16 }}
              onChange={value.changecardnr}
              helperText={value.cardnumberError}
            />
            <TextField
              type="tel"
              name="validdate"
              //   value={this.state.firstName}
              label="Valid(MM/YY)"
              inputProps={{ maxLength: 5 }}
              onKeyDown={this.onlyNumber}
              onChange={value.change}
              helperText={value.validdateError}
            />
            <TextField
              type="tel"
              name="ccv"
              inputProps={{ maxLength: 3 }}
              label="CCV"
              onKeyDown={this.onlyNumber}
              onChange={value.change}
              helperText={value.ccvError}
            />
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

export default CreditCard;
