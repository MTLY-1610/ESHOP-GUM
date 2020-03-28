import * as React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart as ShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu as HamburgerMenu } from "react-icons/gi";


export interface Props {}

export interface State {
  burgerMenuIsClicked: boolean;
}

export default class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      burgerMenuIsClicked: false
    };
  }

  burgerMenuClicked = () => {
    if (this.state.burgerMenuIsClicked === false) {
      this.setState({ burgerMenuIsClicked: true });
    } else {
      this.setState({ burgerMenuIsClicked: false });
    }
  };
  render() {
    return (
      <div className="nav">
        <div className="nav-shoppingcart-burgerbar-product">
          <div className="nav-onlyshoppingcart-burgerbar">
            <Link className="navbar" to="/cart">
              <ShoppingCart />
            </Link>
            {<HamburgerMenu onClick={this.burgerMenuClicked} />}
          </div>
          {this.state.burgerMenuIsClicked ? (
            <div className="nav-product">
              <Link className="navbar" to="/products">
                <h6 className="products">PRODUCTS</h6>
              </Link>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
        <div className="nav-header">
          <Link className="navbar" to="/">
            <h4>GUM</h4>
          </Link>
        </div>
      </div>
    );
  }
}
