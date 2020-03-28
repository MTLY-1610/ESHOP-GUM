import * as React from "react";

import { Link } from "react-router-dom";
import { ShoppingCartConsumer } from "../contexts/CartContext";

export interface Props {}

export interface State {}

class Payment extends React.Component<Props, State> {
  render() {
    
    return <div >
      <div className="cart-Recap">
        <div className="cart-Recap-Header">
            <h5>ITEM:</h5>
            <h5>QTY:</h5>
            <h5>SIZE:</h5>
            <h5>PRICE:</h5>
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
                      <div className="qtydiv">{item.count}</div>
                      <div className="sizediv">{item.size}</div>
                      <div className="pricediv">{item.product.price}$</div>
                    </div>
                  </React.Fragment>
                );
              });
            }}
          </ShoppingCartConsumer>
      
      </div>
    </div>;
  }
}

export default Payment;
