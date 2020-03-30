import * as React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../contexts/CartContext";
import { CartItem } from "../contexts/CartContext";

export interface Props {}

export interface State {
  total: number;
  shipping: number;
  subtotal: number;
}

class TotalBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      total: 0,
      subtotal: 0,
      shipping: 0
    };
  }
  static contextType = ShoppingCartContext;
  componentDidMount() {
    // TODO: ADD ITEM.PRODUCT.PRICE TO STATE
    let value = this.context;
    value.shoppingCart.forEach((element: CartItem) =>
      console.log(element.product.price)
    );
  }

  componentWillUnmount() {
    // this.setState({ total: 0 });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-total">
          <h3>Total</h3>
        </div>
        <div className="subheader-total">
          <p>Sub-total:</p>
          <p>{this.state.total}$</p>
        </div>
        <div className="subheader-total">
          <p>Shipping:</p>
          <p>40$</p>
        </div>
        <div className="paymentbutton">
          <Link to="/payment">
            <button>CHECKOUT</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default TotalBox;
