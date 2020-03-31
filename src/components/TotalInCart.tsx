import * as React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../contexts/CartContext";
import { CartItem } from "../contexts/CartContext";

export interface Props {}

export interface State {
  total: number;
  shipping: number | string;
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

  // TODO MAKE THIS FUNCTION CONNECTED TO REMOVE ELEMENT BUTTON
  static contextType = ShoppingCartContext;
  componentDidMount() {
    let shipping;
    let subtotal: number = 0;
    // TODO: ADD ITEM.PRODUCT.PRICE TO STATE
    let value = this.context;
    value.shoppingCart.map((cartRow: CartItem) => {
      subtotal += cartRow.product.price;
      this.setState({ subtotal: subtotal });
    });

    if (subtotal < 150) {
      shipping = 19;
      this.setState({ shipping: shipping });
      this.setState({
        total: this.state.subtotal + shipping
      });
    } else if (subtotal > 150) {
      shipping = "Free";
      this.setState({ shipping: shipping });
      this.setState({ total: subtotal });
    }
  }

  componentDidUpdate() {
    console.log("Jag har uppdaterats");
  }

  componentWillUnmount() {
    // this.setState({ total: 0 });
    // this.setState({ subtotal: 0 });
    // this.setState({ shipping: 0 });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-total">
          <h3>Total</h3>
        </div>
        <div className="subheader-total">
          <p>Sub-total:</p>
          <p>{this.state.subtotal}$</p>
        </div>
        <div className="subheader-total">
          <p>Shipping:</p>
          <p>
            {this.state.shipping === "Free"
              ? this.state.shipping
              : this.state.shipping + "$"}
          </p>
        </div>
        <div className="total-total">
          <p>Total:</p>
          <p>{this.state.total}$</p>
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
