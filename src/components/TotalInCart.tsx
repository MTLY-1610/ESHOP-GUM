import * as React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartContext,
  ShoppingCartConsumer,
} from "../contexts/CartContext";
import { CartItem } from "../contexts/CartContext";
import Button from "@material-ui/core/Button";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

export interface Props {}

export interface State {}

class TotalBox extends React.Component<Props, State> {
  render() {
    return (
      <ShoppingCartConsumer>
        {(value) =>
          value.shoppingCart.length === 0 ? (
            <></>
          ) : (
            <>
              <div className="header-total">
                <h3>Total</h3>
              </div>
              <div className="subheader-total">
                <p>Sub-total:</p>
                <p>
                  {value.totalAmount() === 0
                    ? 0
                    : value.totalAmount() -
                      Number(value.shippingAmount) +
                      Number(value.shippingAmount)}
                  $
                </p>
              </div>

              <div className="subheader-total">
                <p>Shipping:</p>
                <p>
                  {value.shippingAmount === 0
                    ? "Free"
                    : `${value.shippingAmount}$`}
                </p>
              </div>
              {value.isDateTrue === true ? (
                <></>
              ) : (
                <div className="subheader-total">
                  <p>Delivery:</p>
                  <p className="date">{value.date}</p>
                </div>
              )}
              <div className="delivery-radio">
                <RadioGroup onChange={value.shipping}>
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
                    // checkedIcon={true}
                  />
                </RadioGroup>
              </div>
              <div className="total-total">
                <p>Total:</p>
                <p>{value.totalAmount() + Number(value.shippingAmount)}$</p>
              </div>
              <div className="paymentbutton">
                <Link to="/payment" style={{ textDecoration: "none" }}>
                  <Button disabled={value.isDateTrue} id="next-button">
                    TO PAYMENT
                  </Button>
                </Link>
              </div>
            </>
          )
        }
      </ShoppingCartConsumer>
    );
  }
}

export default TotalBox;
