import * as React from "react";
import { Product } from "../sneakerData";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contexts/ProductContext";

export interface Props {
  sneaker: Product;
  key: number;
}

export interface State {}

class Sneaker extends React.Component<Props, State> {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="flex-child">
              <div className="img-div">
                <Link to={`item${this.props.sneaker.id}`}>
                  {
                    <img
                      onClick={() => value.handleClick(this.props.sneaker.id)}
                      src={window.location.origin + this.props.sneaker.img}
                      alt="img"
                    />
                  }
                </Link>
              </div>
              <div className="brand-model-div">
                <div>
                  <p>{this.props.sneaker.brand}</p>
                  <p>{this.props.sneaker.model}</p>
                </div>
                <div className="price-div">
                  <p>{this.props.sneaker.price}$</p>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Sneaker;
