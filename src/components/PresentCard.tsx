import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {}

export interface State {}

class PresentCard extends React.Component<Props, State> {
  render() {
    return (
      <CheckoutConsumer>
        {value => (
          <div className="adress-Recap">
            <div className="payment-details">
              <h5 className="headers">PRESENTCARD DETAILS:</h5>
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
                name="PresentCard"
                //   value={this.state.firstName}
                label="Present Card"
                inputProps={{ maxLength: 15 }}
                // onChange={this.handleChange}
                //   onKeyDown={this.onlyLetter}
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

export default PresentCard;
