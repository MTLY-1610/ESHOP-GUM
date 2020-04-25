import * as React from "react";
import { ShoppingCartConsumer, CartItem } from "../contexts/CartContext";
import { MdClear } from "react-icons/md";
import AddIcon from "@material-ui/icons/Add";

export interface Props {
  item: CartItem;
}

export interface State {}

class CartRow extends React.Component<Props, State> {
  render() {
    return (
      <ShoppingCartConsumer>
        {(value) => (
          <React.Fragment>
            <div className="cart-img-info-div">
              <div className="cart-imgdiv">
                <img src={this.props.item.product.img} alt="img" />
              </div>
              <div className="cart-qty-size-price-div">
                <div className="flex-cart-info">
                  <div>
                    <p className="modeldiv">{this.props.item.product.brand}</p>
                    <p className="modeldiv">{this.props.item.product.model}</p>
                  </div>
                  <div className="pricediv">
                    <p>
                      {this.props.item.product.price * this.props.item.count}$
                    </p>
                  </div>
                </div>
                <div className="flex-cart-info">
                  <div>
                    <p className="qtydiv">QTY: {this.props.item.count}</p>
                    <p className="qtydiv">SIZE: {this.props.item.size}</p>
                  </div>
                  <div className="icondiv">
                    <AddIcon
                      onClick={() =>
                        value.addToCart(
                          this.props.item.product,
                          this.props.item.size
                        )
                      }
                      id="cursor"
                    />

                    <MdClear
                      onClick={() =>
                        value.removeCartRow(
                          this.props.item.product.id,
                          this.props.item.count
                        )
                      }
                      id="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </ShoppingCartConsumer>
    );
  }
}

export default CartRow;
