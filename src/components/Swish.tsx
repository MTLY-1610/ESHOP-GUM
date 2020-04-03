import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {
  onlyNumber: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface State {}

class Swish extends React.Component<Props, State> {
  render() {
    return (
      <CheckoutConsumer>
        {value => (
          <div className="adress-Recap">
            <div>
              <h5 className="headers">SWISH DETAILS:</h5>
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
                name="PhoneNumber"
                //   value={this.state.firstName}
                label="Phone Number"
                // onChange={this.handleChange}
                onKeyDown={this.props.onlyNumber}
                inputProps={{ maxLength: 10 }}
              />
            </div>
            <div>
            <Button id="next-button" variant="contained" color="primary" href="checkout">
  CHECKOUT
</Button>
            </div>
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

export default Swish;
