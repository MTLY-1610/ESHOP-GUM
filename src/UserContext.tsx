import * as React from "react";
import { Product, productData } from "./sneakerData";

const defaultState = {
  products: productData,
  detailPage: () => console.log("welcome to detailpage"),
  addToCart: () => console.log("added to cart")
  // addProduct: () => console.log("defualt context addProduct")
};

const ProductContext = React.createContext<State>(defaultState);

interface Props {}

interface State {
  products: Array<Product>;
  // addProduct: (product: Product) => void;
  // updateProduct: (product: Product) => void;
  // removeProduct: (product: Product) => void;
}

class ProductProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // const productsAsString = localStorage.getItem("products");
    // const products = productsAsString
    //   ? (JSON.parse(productsAsString) as Array<Product>)
    //   : productData;

    this.state = {
      products: productData
      // addProduct: this.addProduct
    };
  }

  detailPage = () => {
    console.log("detailpage");
  };

  addToCart = () => {
    console.log("added to cart");
  };

  // addProduct = (product: Product) => {
  //   // this.setState.....
  //   console.log("add product");
  // };

  // componentDidUpdate() {
  //   localStorage.setItem("products", JSON.stringify(this.state.products));
  // }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
