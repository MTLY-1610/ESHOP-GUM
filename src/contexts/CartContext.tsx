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
  shoppingCart: [],
  removeCartRow: () => {}
};

const ShoppingCartContext = React.createContext<State>(defaultState);

export interface Props {}

export interface State {
  product: Array<Product>;
  count: number;
  size: number;
  addToCart: (item: Product, size: number) => void;
  removeCartRow: (id: number, count: number) => void;
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
      shoppingCart: [],
      removeCartRow: this.removeCartRow
    };
  }
  removeCartRow = (id: number, count: number) => {
    let copiedCart = this.state.shoppingCart;
    copiedCart = copiedCart.filter(item => item.product.id !== id);
    count--;
    // TODO FIX THE COUNTER AND PRICE
    if (count === 0) {
      this.setState({ shoppingCart: copiedCart });
    } else {
      this.setState({ count: count });
    }
  };

  addToCart = (product: Product, size: number) => {
    let cartList = this.state.shoppingCart;

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
      const tempIndex = cartList.findIndex(index => index.product === product);
      cartItem.product.price = cartItem.product.price + cartItem.product.price;
      cartItem.count++;
      cartList[tempIndex] = cartItem;
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
