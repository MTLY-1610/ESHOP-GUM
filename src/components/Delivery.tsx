import * as React from "react";
import TextField from "@material-ui/core/TextField";

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
      <div className="adress">
        <div>
          <h5 className="headers">DELIVERY ADRESS</h5>
          <TextField type="name" name="firstname" label="First Name" />
          <TextField type="name" name="lastName" label="Last Name" />
          <TextField type="name" name="Adress" label="Adress" />
          <TextField type="email" name="Email" label="Email" />
          <TextField type="text" name="Country" label="Country" />
          <TextField type="text" name="City" label="City" />
           
        </div>
      </div>
    );
  }
}

export default DeliveryForm;
