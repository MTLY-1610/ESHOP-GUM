import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { RadioGroup, FormControl } from "@material-ui/core";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {}

export interface State {}

class PaymentMethods extends React.Component<Props, State> {
  render() {
    return (
      <CheckoutConsumer>
        {(value) => (
          <div className="payment-Solution">
            <h5 className="headers">PAYMENT METHOD</h5>

            <RadioGroup onChange={value.paymentMethod} style={flex}>
              <FormControlLabel
                value="CreditCard"
                control={<Radio color="primary" />}
                label="Credit Card"
                labelPlacement="end"
              />

              <FormControlLabel
                control={<Radio color="primary" />}
                value="Swish"
                label="Swish"
                labelPlacement="end"
              />

              <FormControlLabel
                value="PresentCard"
                control={<Radio color="primary" />}
                label="Present Card"
                labelPlacement="end"
              />
            </RadioGroup>
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

const flex: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

export default PaymentMethods;
