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
          
            <div className="delivery-details">
              <h5 className="headers">DELIVERY ADRESS</h5>
              <TextField
                id="field"
                inputProps={{ minLength: 2 }}
                type="name"
                name="firstname"
                label="First Name"
              />
              <TextField
                id="field"
                inputProps={{ minLength: 2 }}
                type="name"
                name="lastName"
                label="Last Name"
              />
              <TextField
                id="field"
                onChange={value.getAdress}
                type="name"
                name="Adress"
                label="Adress"
              />
              <TextField
                id="field"
                onChange={value.getEmail}
                type="email"
                name="Email"
                label="Email"
              />
              <TextField
                id="field"
                onChange={value.getCountry}
                inputProps={{ minLength: 4 }}
                type="text"
                name="Country"
                label="Country"
              />
              <TextField
                id="field"
                onChange={value.getCity}
                inputProps={{ minLength: 2 }}
                type="text"
                name="City"
                label="City"
              />
               
            </div>
          
        )}
      </CheckoutConsumer>
    );
  }
}

export default DeliveryForm;
