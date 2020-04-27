import * as React from "react";
import Checkout from "./Checkout";
import TextField from "@material-ui/core/TextField";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {}

export interface State {}

class PresentCard extends React.Component<Props, State> {
  onlyNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const x = event.which || event.keyCode;
    if (x >= 65 && x <= 90) {
      event.preventDefault();
      return "false";
    } else {
      return "true";
    }
  };

  onlyLetter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const x = event.which || event.keyCode;
    if ((x >= 45 && x <= 57) || (x >= 96 && x <= 105)) {
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
            <h5 className="headers">PRESENTCARD DETAILS:</h5>
            <TextField
              type="name"
              name="Fullname"
              label="Full name"
              value={`${value.firstname} ${value.lastname}`}
            />
            <TextField
              type="tel"
              name="presentcardnumber"
              label="Present Card"
              inputProps={{ maxLength: 15 }}
              onChange={value.change}
              onKeyDown={this.onlyLetter}
              helperText={value.presentcardnumberError}
            />
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

export default PresentCard;
