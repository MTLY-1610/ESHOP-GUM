import * as React from "react";
import { Link } from "react-router-dom";
import { productData } from "../sneakerData";
import { ProductConsumer } from "../UserContext";
import Sneaker from "./Sneaker";

export interface Props {}

export interface State {
  products: Array<object>;
}

class Products extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: productData
    };
  }
  render() {
    console.log(this.state);
    return (
      <ProductConsumer>
        {value => {
          return value.products.map(sneaker => {
            return <Sneaker key={sneaker.id} sneaker={sneaker} />;
          });
        }}
      </ProductConsumer>
    );
  }
}

export default Products;
