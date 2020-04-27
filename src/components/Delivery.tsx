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
        {(value) => (
          <div className="delivery-details">
            <h5 className="headers">DELIVERY ADRESS</h5>
            <TextField
              id="field"
              inputProps={{ minLength: 2 }}
              type="name"
              name="firstname"
              label="First Name"
              onChange={value.change}
              helperText={value.firstnameError}
              value={value.firstname}
            />
            <TextField
              id="field"
              inputProps={{ minLength: 2 }}
              type="name"
              name="lastname"
              label="Last Name"
              onChange={value.change}
              value={value.lastname}
              helperText={value.lastnameError}
            />
            <TextField
              id="field"
              onChange={value.change}
              type="name"
              name="adress"
              label="Adress"
              value={value.adress}
              helperText={value.adressError}
            />
            <TextField
              id="field"
              onChange={value.change}
              type="email"
              name="email"
              label="Email"
              value={value.email}
              helperText={value.emailError}
            />
            <TextField
              id="field"
              onChange={value.change}
              inputProps={{ minLength: 4 }}
              type="text"
              name="country"
              label="Country"
              value={value.country}
            />
            <TextField
              id="field"
              onChange={value.change}
              inputProps={{ minLength: 2 }}
              type="text"
              name="city"
              label="City"
              value={value.city}
              helperText={value.cityError}
            />
             
          </div>
        )}
      </CheckoutConsumer>
    );
  }
}

export default DeliveryForm;
