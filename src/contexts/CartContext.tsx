import * as React from "react";
import { Product } from "../sneakerData";

export interface CartItem {
  product: Product;
  count: number;
  size: number;
}

const defaultState = {
  addToCart: () => {},
  shoppingCart: [],
  removeCartRow: () => {},
  shipping: () => 0,
  totalAmount: () => 0
};

const ShoppingCartContext = React.createContext<State>(defaultState);

export interface Props {}

export interface State {
  addToCart: (item: Product, size: number) => void;
  removeCartRow: (id: number, count: number) => void;
  shoppingCart: Array<CartItem>;
  totalAmount: () => number;
  shipping: () => number;
}

class ShoppingCartProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      addToCart: this.addToCart,
      shoppingCart: [],
      removeCartRow: this.removeCartRow,
      totalAmount: this.totalAmount,
      shipping: this.shipping
    };
  }

  shipping = () => {
    let sum = 0;
    if (this.state.shoppingCart.length !== 0) {
      for (const item of this.state.shoppingCart) {
        sum += item.product.price * item.count;
      }
      if (sum > 200) {
        return 0;
      } else {
        return 19;
      }
    } else {
      return 0;
    }
  };

  totalAmount = () => {
    let sum = 0;
    for (const item of this.state.shoppingCart) {
      sum += item.product.price * item.count;
    }
    return sum;
  };

  removeCartRow = (id: number, count: number) => {
    let copiedCart: CartItem[] = Object.assign([], this.state.shoppingCart);

    for (const item of copiedCart) {
      if (id === item.product.id && item.count > 1) {
        item.count--;
        this.setState({ shoppingCart: copiedCart });
        return;
      }
    }

    this.setState({
      shoppingCart: copiedCart.filter(item => item.product.id !== id)
    });
  };

  addToCart = (product: Product, size: number) => {
    let cartList: CartItem[] = Object.assign([], this.state.shoppingCart);

    let cartItem: CartItem | undefined = cartList.find(itemToFind => {
      if (
        itemToFind.product.id === product.id &&
        itemToFind.size === Number(size)
      ) {
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
      // TODO FIX THE PRICE
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
