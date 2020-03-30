import * as React from "react";
// import { Product } from "../sneakerData";
import { RouteProps } from "react-router";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contexts/ProductContext";
import { ShoppingCartConsumer } from "../contexts/CartContext";

export interface Props {}

export interface State {
  size: string;
}

class Item extends React.Component<Props & RouteProps, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      size: "0"
    };
  }

  changeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ size: event.target.value });
  };
  render() {
    return (
      <ProductConsumer>
        {productState => (
          <ShoppingCartConsumer>
            {cartState => (
              <React.Fragment>
                <div className="item-flex">
                  {productState.detail.length === 0 ? (
                    <div style={centralizeDiv}>
                      <h1>
                        NO PRODUCT CHOSEN, GO BACK TO{" "}
                        <Link className="styleNav" to="/products">
                          products
                        </Link>
                      </h1>
                    </div>
                  ) : (
                    productState.detail.map(item => {
                      // TODO: bryt ut till en egen komponent
                      return (
                        <React.Fragment key={item.id}>
                          <div className="item-img-div">
                            <img src={item.img} alt="img" />
                          </div>
                          <div className="restOfDetails">
                            <div className="info-item-div">
                              <div className="shoename">
                                <h1>{item.brand}</h1>
                                <h5>{item.model}</h5>
                              </div>
                              <div className="shoeprice">
                                <h1>{item.price}$</h1>
                              </div>
                            </div>
                            <div className="description">
                              <p>{item.description}</p>
                            </div>
                            <div className="dropdown">
                              <div>
                                <label htmlFor="size">Choose size:</label>
                                <select
                                  onChange={this.changeSize}
                                  name="size"
                                  id="size"
                                >
                                  
                                  <option value={41}>41</option>
                                  <option value={42}>42</option>
                                  <option value={43}>43</option>
                                  <option value={44}>44</option>
                                  <option value={45}>45</option>
                                  <option value={46}>46</option>
                                 
                                </select>
                              </div>
                            </div>
                            <div className="buttondiv">
                              <button
                                onClick={() =>
                                  cartState.addToCart(
                                    item,
                                    Number(this.state.size)
                                  )
                                }
                                className="addtocart"
                              >
                                Add to cart
                              </button>
                            </div>
                            <div className="secondButtondiv">
                              <Link className="link" to="/cart">
                                <div className="basket">
                                  <span>view </span>
                                  <span>basket</span>
                                </div>
                              </Link>
                              <Link className="link" to="/products">
                                <div className="cart">
                                  <span>continue </span>

                                  <span>shopping</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })
                  )}
                </div>
              </React.Fragment>
            )}
          </ShoppingCartConsumer>
        )}
      </ProductConsumer>
    );
  }
}

const centralizeDiv: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default Item;
