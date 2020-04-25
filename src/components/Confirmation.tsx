import * as React from "react";
import { CheckoutConsumer } from "../contexts/CheckoutContext";

export interface Props {}

export interface State {}

class Confirmation extends React.Component<Props, State> {
  render() {
    return (
      <CheckoutConsumer>
        {(value) =>
          value.email === "" ? (
            <></>
          ) : (
            <div className="confirmed">
              <h2>Thanks for your order.</h2>
              <h2>
                Your ordernumber is: 12390{Math.floor(Math.random() * 99)}
              </h2>
              <h2>Confirmation of your order is sent to:</h2>
              <h2>{value.email}</h2>
            </div>
          )
        }
      </CheckoutConsumer>
    );
  }
}

export default Confirmation;
