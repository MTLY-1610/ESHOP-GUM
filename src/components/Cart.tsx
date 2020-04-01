import * as React from "react";
import { Link } from "react-router-dom";
import TotalBox from "./TotalInCart";
import { MdClear } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";
import { ShoppingCartConsumer } from "../contexts/CartContext";

export interface Props {}

export interface State {}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

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
                  {value.shoppingCart.map(item => {
                    return (
                      <React.Fragment key={item.product.id}>
                        <div className="cart-img-info-div-header">
                          <h3>Shopping Cart</h3>
                        </div>
                        <div className="cart-img-info-div">
                          <div className="cart-imgdiv">
                            <img src={item.product.img} alt="img" />
                          </div>
                          <div className="cart-qty-size-price-div">
                            <div className="flex-cart-info">
                              <div>
                                <p className="modeldiv">{item.product.brand}</p>
                                <p className="modeldiv">{item.product.model}</p>
                              </div>
                              <div className="pricediv">
                                <p>{item.product.price * item.count}$</p>
                              </div>
                            </div>
                            <div className="flex-cart-info">
                              <div>
                                <p className="qtydiv">QTY: {item.count}</p>
                                <p className="qtydiv">SIZE: {item.size}</p>
                              </div>
                              <div className="icondiv">
                                <MdClear
                                  onClick={() =>
                                    value.removeCartRow(
                                      item.product.id,
                                      item.count
                                    )
                                  }
                                  id="icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </>
              )
            }
          </ShoppingCartConsumer>
        </div>

        <div className="totalDiv">
          <TotalBox />
        </div>
      </div>
    );
  }
}

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
