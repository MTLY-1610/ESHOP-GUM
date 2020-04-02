import * as React from "react";
import { Link } from "react-router-dom";
import TotalBox from "./TotalInCart";
import PaymentDeliveryMethod from "./PaymentDeliveryMethods";
import { MdShoppingBasket } from "react-icons/md";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import CartRow from "./CartRow";

export interface Props {}

export interface State {}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  isChecked = () => {};
  render() {
    return (
      <div className="flex-cart">
        <div className="box-for-flex">
          <ShoppingCartConsumer>
            {value =>
              value.shoppingCart.length === 0 ? (
                <div style={displayFlexDiv}>
                  <div style={emptyCartDiv}>
                    <MdShoppingBasket id="shoppingbasket" />
                    <h2>Your cart is currently empty</h2>
                    <Link to="/products">
                      <h3>Continue Shopping</h3>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="cart-img-info-div-header">
                    <h3>Shopping Cart</h3>
                  </div>
                  {value.shoppingCart.map(item => {
                    return <CartRow item={item} />;
                  })}
                </>
              )
            }
          </ShoppingCartConsumer>
        </div>

        <div className="totalDiv">
          <TotalBox isChecked={this.isChecked} />
        </div>
      </div>
    );
  }
}

const flexBox: React.CSSProperties = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "35%",
  flexDirection: "column"
};

const emptyCartDiv: React.CSSProperties = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  letterSpacing: "1px",
  lineHeight: "2.5rem"
};
const displayFlexDiv: React.CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  marginLeft: "165px",
  alignItems: "flex-end",
  justifyContent: "center",
  flexDirection: "column"
};

export default Cart;
