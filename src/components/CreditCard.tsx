import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {
  onlyNumber: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface State {}

class CreditCard extends React.Component<Props, State> {
  render() {
    return (
      <CheckoutConsumer>
        {value => (
          <div className="adress-Recap">
            <div className="payment-details">
              <h5 className="headers">CARD DETAILS:</h5>
              <TextField
                type="name"
                name="Fullname"
                //   value={this.state.firstName}
                label="Full name"
                onChange={value.getName}
                //   onKeyDown={this.onlyLetter}
              />
              <TextField
                type="tel"
                name="cardNumber"
                label="Card Number"
                onKeyDown={this.props.onlyNumber}
                inputProps={{ maxLength: 16 }}
                onChange={value.getCardNr}
              />
              <TextField
                type="tel"
                name="Valid Date"
                //   value={this.state.firstName}
                label="Valid(MM/YY)"
                inputProps={{ maxLength: 5 }}
                onKeyDown={this.props.onlyNumber}
                onChange={value.getExpireDay}
              />
              <TextField
                type="tel"
                name="ccv"
                inputProps={{ maxLength: 3 }}
                //   value={this.state.firstName}
                label="CCV"
                // onChange={this.handleChange}
                onKeyDown={this.props.onlyNumber}
              />
            </div>
            <div className="buttonDiv">
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <Button id="next-button" variant="contained" color="primary">
                  CHECKOUT
                </Button>
              </Link>
            </div>
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

export default CreditCard;
