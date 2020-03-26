import * as React from "react";
import { Product, productData, detailData } from "./sneakerData";

const defaultState = {
  products: productData,
  handleClick: () => console.log("handleClick"),
  detail: detailData,
  addToCart: () => console.log("adding to cart")
  // addProduct: () => console.log("defualt context addProduct")
};

const ProductContext = React.createContext<State>(defaultState);

interface Props {}

interface State {
  products: Array<Product>;
  handleClick: (id: number) => void;
  addToCart: () => void;
  detail: Array<Product>;

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
      products: [],
      handleClick: this.handleClickForDetail,
      addToCart: this.addToCart,
      detail: []
      // addProduct: this.addProduct
    };
  }

  componentDidMount() {
    this.copyProducts();
  }

  handleClickForDetail = (id: number) => {
    this.setState({ detail: [this.state.products[id]] });
  };

  copyProducts = () => {
    let copiedProducts: Array<Product> = [];
    productData.forEach(item => {
      const shoe = { ...item };
      copiedProducts = [...copiedProducts, shoe];
    });
    this.setState(() => {
      return { products: copiedProducts };
    });
  };

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
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
