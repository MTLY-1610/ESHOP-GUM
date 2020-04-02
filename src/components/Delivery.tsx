import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {
  checkDelivery: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}

export interface State {}

class DeliveryForm extends React.Component<Props, State> {
  render() {
    return (
      <CheckoutConsumer>
        {value => (
          <div className="adress-Recap">
            <div>
              <h5 className="headers">DELIVERY ADRESS</h5>
              <TextField
                inputProps={{ minLength: 2 }}
                type="name"
                name="firstname"
                label="First Name"
              />
              <TextField
                inputProps={{ minLength: 2 }}
                type="name"
                name="lastName"
                label="Last Name"
              />
              <TextField
                onChange={value.getAdress}
                type="name"
                name="Adress"
                label="Adress"
              />
              <TextField
                onChange={value.getEmail}
                type="email"
                name="Email"
                label="Email"
              />
              <TextField
                onChange={value.getCountry}
                inputProps={{ minLength: 4 }}
                type="text"
                name="Country"
                label="Country"
              />
              <TextField
                onChange={value.getCity}
                inputProps={{ minLength: 2 }}
                type="text"
                name="City"
                label="City"
              />
               
            </div>
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

export default DeliveryForm;
