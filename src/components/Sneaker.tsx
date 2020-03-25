import * as React from "react";
import { Product } from "../sneakerData";
import { Link } from "react-router-dom";
import { url } from "inspector";

export interface Props {
  sneaker: Product;
  key: number;
}

export interface State {}

class Sneaker extends React.Component<Props, State> {
  render() {
    return (
      <div className="flex-child">
        <div className="img-div">
          <Link to="/item">
            {
              <img
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
            <p>{this.props.sneaker.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sneaker;
