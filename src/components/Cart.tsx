import * as React from "react";
import TotalBox from "./TotalInCart";
import { MdClear } from "react-icons/md";
import { ShoppingCartConsumer } from "../contexts/CartContext";

export interface Props {}

export interface State {}

class Cart extends React.Component<Props, State> {
  render() {
    // TODO: CREATE IF STATEMENT TO CONTROL RENDERING IF PRODUCTS EXISTS
    return (
      <div className="flex-cart">
        <div className="box-for-flex">
          <div className="cart-img-info-div-header">
            <h3>Shopping Cart</h3>
          </div>
          <ShoppingCartConsumer>
            {value => {
              return value.shoppingCart.map(item => {
                return (
                  <React.Fragment>
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
                            <p>{item.product.price}$</p>
                          </div>
                        </div>
                        <div className="flex-cart-info">
                          <div>
                            <p className="qtydiv">QTY: {item.count}</p>
                            <p className="qtydiv">SIZE: {item.size}</p>
                          </div>
                          <div className="icondiv">
                            <MdClear id="icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              });
            }}
          </ShoppingCartConsumer>
        </div>

        <div className="totalDiv">
          <TotalBox />
        </div>
      </div>
    );
  }
}

export default Cart;
