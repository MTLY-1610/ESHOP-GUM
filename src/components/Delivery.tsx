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
          <h5 className="headers">DELIVERY ADRESS</h5>
          <TextField id="field" type="name" name="firstname" label="First Name" />
          <TextField id="field" type="name" name="lastName" label="Last Name" />
          <TextField id="field" type="name" name="Adress" label="Adress" />
          <TextField id="field" type="email" name="Email" label="Email" />
          <TextField id="field" type="text" name="Country" label="Country"  />
          <TextField id="field" type="text" name="City" label="City" fullWidth />
           
      </div>
    );
  }
}

export default DeliveryForm;
