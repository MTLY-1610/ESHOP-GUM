import * as React from "react";
import { productData } from "../sneakerData";
import { ProductConsumer } from "../contexts/ProductContext";
import Sneaker from "./Sneaker";

export interface Props {}

export interface State {
  products: Array<object>;
  property: number;
}

class Products extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: productData,
      property: 0
    };
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="sneaker-slider">
              <div className="sneaker-wrapper">
                {value.products.map(sneaker => {
                  return <Sneaker key={sneaker.id} sneaker={sneaker} />;
                })}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Products;
