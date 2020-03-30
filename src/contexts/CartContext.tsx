import * as React from "react";
import { Product, productData } from "../sneakerData";

export interface CartItem {
  product: Product;
  count: number;
  size: number;
}

const defaultState = {
  product: productData,
  count: 0,
  size: 0,
  addToCart: () => {},
  shoppingCart: []
};

const ShoppingCartContext = React.createContext<State>(defaultState);

export interface Props {}

export interface State {
  product: Array<Product>;
  count: number;
  size: number;
  addToCart: (item: Product, size: number) => void;
  shoppingCart: Array<CartItem>;
}

class ShoppingCartProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      product: productData,
      count: 1,
      size: 0,
      addToCart: this.addToCart,
      shoppingCart: []
    };
  }

  addToCart = (product: Product, size: number) => {
    let cartList = this.state.shoppingCart;
    let indexToUpdate: number;

    let cartItem: CartItem | undefined = cartList.find((itemToFind, index) => {
      if (
        itemToFind.product.id === product.id &&
        itemToFind.size === Number(size)
      ) {
        indexToUpdate = index;
        return true;
      }
    });
    // Skapa ny CartItem
    if (!cartItem) {
      cartItem = {
        product: product,
        size: size,
        count: 1
      };
      this.setState({ shoppingCart: [...this.state.shoppingCart, cartItem] });
    } else {
      // Uppdatera befintlig CartItem
      cartItem.product.price = cartItem.product.price + cartItem.product.price;
      cartItem.count++;
      this.setState({ shoppingCart: cartList });
    }
  };

  render() {
    return (
      <ShoppingCartContext.Provider value={this.state}>
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}

const ShoppingCartConsumer = ShoppingCartContext.Consumer;

export { ShoppingCartProvider, ShoppingCartConsumer, ShoppingCartContext };
