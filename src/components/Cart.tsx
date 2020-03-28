import * as React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartConsumer } from "../contexts/CartContext";

export interface Props {}

export interface State {}

class Cart extends React.Component<Props, State> {
  render() {
    return (
      <div className="flex-cart">
        <div className="box-for-flex">
          <div className="cart-img-info-div">
            <h5 className="ITEM-cart">ITEM:</h5>
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
        <div className="personal-button">
          <div className="personalinfo-div">
            <div className="namediv">
              <div className="firstname">
                <span>FIRSTNAME:</span>
                <input type="text" />
              </div>
              <div className="lastname">
                <span>LASTNAME:</span>
                <input type="text" />
              </div>
            </div>
            <div className="adress">
              <span>ADRESS:</span>
              <input type="text" />
            </div>
            <div className="adress">
              <span>EMAIL:</span>
              <input type="text" />
            </div>
            <div className="countryandzip">
              <div className="country">
                <span>COUNTRY:</span>
                <input type="text" />
              </div>
              <div className="zip">
                <span>ZIPCODE:</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="paymentbutton">
            <Link to="/payment">
              <button>PAYMENT</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
