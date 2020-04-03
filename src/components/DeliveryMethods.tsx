import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import Radio from "@material-ui/core/Radio";
import { RadioGroup, FormControl } from "@material-ui/core";
import { Link } from "react-router-dom";

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
      <ShoppingCartConsumer>
        {value =>
          value.radio !== "Free" &&
          value.radio !== "Regular" &&
          value.radio !== "Express" ? (
            <div className="payment-delivery-method">
              <div className="delivery-Solution">
                <h5 className="headers">
                  GO <Link to="/cart">BACK</Link> AND CHOOSE DELIVERY METHOD
                </h5>

                <RadioGroup onChange={this.props.checkDelivery} style={flex}>
                  <FormControlLabel
                    value="Express"
                    control={<Radio color="primary" />}
                    label="Express"
                    labelPlacement="end"
                    checked={value.expressChecked()}
                    disabled={value.expressChecked()}
                  />
                  <FormControlLabel
                    value="Regular"
                    control={<Radio color="primary" />}
                    label="Regular"
                    labelPlacement="end"
                    checked={value.regularChecked()}
                    disabled={value.regularChecked()}
                  />
                  <FormControlLabel
                    value="Free"
                    control={<Radio color="primary" />}
                    label="Free"
                    labelPlacement="end"
                    checked={value.freeChecked()}
                    disabled={value.freeChecked()}
                  />
                </RadioGroup>
              </div>
            </div>
          ) : (
            <div className="payment-delivery-method">
              <div className="delivery-Solution">
                <h5 className="headers">DELIVERY</h5>

                <RadioGroup onChange={this.props.checkDelivery} style={flex}>
                  <FormControlLabel
                    value="Express"
                    control={<Radio color="primary" />}
                    label="Express"
                    labelPlacement="end"
                    checked={value.expressChecked()}
                    disabled={value.expressChecked()}
                  />
                  <FormControlLabel
                    value="Regular"
                    control={<Radio color="primary" />}
                    label="Regular"
                    labelPlacement="end"
                    checked={value.regularChecked()}
                    disabled={value.regularChecked()}
                  />
                  <FormControlLabel
                    value="Free"
                    control={<Radio color="primary" />}
                    label="Free"
                    labelPlacement="end"
                    checked={value.freeChecked()}
                    disabled={value.freeChecked()}
                  />
                </RadioGroup>
              </div>
            </div>
          )
        }
      </ShoppingCartConsumer>
    );
  }
}

const flex: React.CSSProperties = {
  display: "flex",
  flexDirection: "row"
};

export default DeliveryMethods;
