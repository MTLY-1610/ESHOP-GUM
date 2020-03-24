import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {}

export interface State {}

class Cart extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h5>Your Shopping Cart</h5>;
        <Link to="/payment">
          <button> Go to Payment</button>
        </Link>
      </div>
    );
  }
}

export default Cart;
