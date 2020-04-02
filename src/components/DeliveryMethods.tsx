import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { RadioGroup, FormControl } from "@material-ui/core";

export interface Props {
  
  checkDelivery: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}

export interface State {}

class DeliveryMethods extends React.Component<Props, State> {
  render() {
    return (
      <div className="payment-delivery-method">
      
        <div className="delivery-Solution">
          <h5 className="headers">DELIVERY</h5>
        
            <RadioGroup onChange={this.props.checkDelivery} style={flex }>
              <FormControlLabel
                value="Express"
                control={<Radio color="primary" />}
                label="Express"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Regular"
                control={<Radio color="primary" />}
                label="Regular"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Free"
                control={<Radio color="primary" />}
                label="Free"
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

export default DeliveryMethods;
