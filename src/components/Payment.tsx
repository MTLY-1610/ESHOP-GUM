import * as React from "react";

import { Link } from "react-router-dom";
import { ShoppingCartConsumer } from "../contexts/CartContext";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TotalBox from "./TotalInCart";

export interface Props {}

export interface State {
  ccv: boolean;
  validDay: boolean;
  validMonth: boolean;
  creditCard: boolean;
  checkIfTrue: () => boolean;
  name: boolean;
}

class Payment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ccv: false,
      validMonth: false,
      validDay: false,
      creditCard: false,
      checkIfTrue: this.checkIfTrue,
      name: false
    };
  }
  creditCardValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 4 && event.target.value.length !== 0) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ creditCard: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ creditCard: true });
    }
  };
  nameValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 1) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ name: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ name: true });
    }
  };
  validDayValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 2 && event.target.value.length !== 0) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ validDay: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ validDay: true });
    }
  };
  validMonthValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 2 && event.target.value.length !== 0) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ validMonth: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ validMonth: true });
    }
  };
  ccvValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 3 && event.target.value.length !== 0) {
      event.target.style.borderBottom = "1px dotted red";
      this.setState({ ccv: false });
    } else {
      event.target.style.borderBottom = "";
      this.setState({ ccv: true });
    }
  };

  checkIfTrue = () => {
    if (
      this.state.ccv === true &&
      this.state.creditCard === true &&
      this.state.validDay === true &&
      this.state.validMonth === true &&
      this.state.name === true
    ) {
      return false;
    } else {
      return true;
    }
  };

  onlyLetter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const x = event.which || event.keyCode;
    if ((x >= 45 && x <= 57) || (x >= 96 && x <= 105)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  onlyNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const x = event.which || event.keyCode;
    if (x >= 65 && x <= 90) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  };
  render() {
    return (
      <div className="payment-layout">
        <div className="Recap">
          <div className="cart-Recap">
            <div className="cart-img-info-div">
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
            <div className="headers">
              <h5>TOTAL</h5>
              <TotalBox />
            </div>
          </div>
        </div>
         
        <div className="Now">
          <div className="solution">
            <div className="payment-Solution">
              <h5 className="headers">PAYMENT METHOD</h5>
              <div className="Choices">
                <Checkbox /> <h5 className="headers">Credit Card</h5>
                <Checkbox /> <h5 className="headers">Bank Transfer</h5>
              </div>
            </div>
            <div className="delivery-Solution">
              <h5 className="headers">DELIVERY</h5>
              <div className="Choices">
                <Checkbox /> <h5 className="headers">EXPRESS</h5>
                <Checkbox /> <h5 className="headers">REGULAR</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pay">
          <div className="adress-Recap">
            <h5 className="headers">DELIVERY ADRESS</h5>
            <div className="firstname">
              <span>FIRSTNAME:</span>
              <input
                onChange={this.nameValidation}
                onKeyDown={this.onlyLetter}
                type="text"
              />
            </div>
            <div className="lastname">
              <span>LASTNAME:</span>
              <input
                onChange={this.nameValidation}
                onKeyDown={this.onlyLetter}
                type="text"
              />
            </div>
            <div className="adress">
              <span>ADRESS:</span>
              <input type="text" />
            </div>
            <div className="adress">
              <span>EMAIL:</span>
              <input type="email" />
            </div>
            <div className="mail">
              <span>CONFIRM EMAIL:</span>
              <input type="email" />
            </div>
            <div className="country">
              <span>COUNTRY:</span>
              <input onKeyDown={this.onlyLetter} type="text" />
            </div>
            <div className="country">
              <span>CITY:</span>
              <input onKeyDown={this.onlyLetter} type="text" />
            </div>
             
          </div>
          <div className="adress-Recap">
            <h5 className="headers">CARD DETAILS:</h5>
            <div className="firstname">
              <span>NAME:</span>
              <input
                onChange={this.nameValidation}
                onKeyDown={this.onlyLetter}
                type="name"
              />
            </div>
            <div className="card">
              <span>CARDNR:</span>
              <input
                onKeyDown={this.onlyNumber}
                onChange={this.creditCardValidation}
                type="tel"
                minLength={4}
                maxLength={4}
              />
              <span>-</span>
              <input
                onKeyDown={this.onlyNumber}
                onChange={this.creditCardValidation}
                type="tel"
                minLength={4}
                maxLength={4}
              />
              <span>-</span>
              <input
                onKeyDown={this.onlyNumber}
                onChange={this.creditCardValidation}
                type="tel"
                minLength={4}
                maxLength={4}
              />
              <span>-</span>
              <input
                onKeyDown={this.onlyNumber}
                onChange={this.creditCardValidation}
                type="tel"
                minLength={4}
                maxLength={4}
              />
            </div>
            <div className="validity-ccv">
              <div className="validity">
                <span>VALIDITY:</span>
                <input
                  onKeyDown={this.onlyNumber}
                  onChange={this.validDayValidation}
                  minLength={2}
                  maxLength={2}
                  type="tel"
                />
                <span> &nbsp;/&nbsp;</span>
                <input
                  onKeyDown={this.onlyNumber}
                  minLength={2}
                  maxLength={2}
                  onChange={this.validMonthValidation}
                  type="tel"
                />
              </div>
              <div className="ccv">
                <span>CCV:</span>
                <input
                  onKeyDown={this.onlyNumber}
                  type="tel"
                  minLength={3}
                  maxLength={3}
                  onChange={this.ccvValidation}
                />
              </div>
            </div>
             
          </div>
          <div className="paymentbutton">
            <Link to="/Checkout">
              <button disabled={this.checkIfTrue()}>PAY</button>
            </Link>
             
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
