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

  componentDidMount() {
    window.addEventListener("keydown", this.keydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keydown);
  }

  keydown = (event: { keyCode: number }) => {
    if (event.keyCode === 39) {
      if (this.state.property !== 247) {
        this.setState({ property: this.state.property + 50 });
      }
    }
    if (event.keyCode === 37) {
      if (this.state.property !== 0) {
        this.setState({ property: this.state.property - 50 });
      }
    }
  };

  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="sneaker-slider">
              <div
                style={{
                  left: `-${this.state.property}%`,
                  right: `+${this.state.property}%`
                }}
                className="sneaker-wrapper"
              >
                <div className="arrow-box">
                  Use key left and right to scroll
                </div>
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
