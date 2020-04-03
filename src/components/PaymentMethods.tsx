import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { RadioGroup, FormControl } from "@material-ui/core";

export interface Props {
  checkPayment: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  
}

export interface State {}

class PaymentMethods extends React.Component<Props, State> {
  render() {
    return (
      <div className="payment-delivery-method">
        <div className="payment-Solution">
          <h5 className="headers">PAYMENT METHOD</h5>
          
            <RadioGroup  onChange={this.props.checkPayment} style={flex}>
              <FormControlLabel
                
                id="radio"
                value="CreditCard"
                control={<Radio color="primary" />}
                label="Credit Card"
                labelPlacement="end"
              />
              <div className="radio-div">
                <img src="/images/Swish-logo.jpg" alt="" width="60 em"/>

              <FormControlLabel
                id="radio"
                control={<Radio color="primary" />}
                value="Swish"
                label="Swish"
                labelPlacement="end"
              />
              </div>
              <FormControlLabel
                id="radio"
                value="PresentCard"
                control={<Radio color="primary" />}
                label="Present Card"
                labelPlacement="end"
              />
            </RadioGroup>
            
        </div>
        </div>
    
      
    );
  }
}

const flex: React.CSSProperties = {
  display: "flex",
  flexDirection: "row"
 
  
};
export default PaymentMethods;
