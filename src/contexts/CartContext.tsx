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
  totalAmount: () => 0,
  expressChecked: () => false,
  regularChecked: () => false,
  buttonValidation: () => true,
  freeChecked: () => false,
  shippingAmount: 0,
  date: 0,
  radio: "",
  isDateTrue: false,
};

const ShoppingCartContext = React.createContext<State>(defaultState);

export interface Props {}

export interface State {
  addToCart: (item: Product, size: number) => void;
  removeCartRow: (id: number, count: number) => void;
  shoppingCart: Array<CartItem>;
  totalAmount: () => number;
  expressChecked: () => boolean;
  regularChecked: () => boolean;
  buttonValidation: () => boolean;
  freeChecked: () => boolean;
  shipping: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  shippingAmount: string | number;
  date: number | string;
  radio: string;

  isDateTrue: boolean;
}

class ShoppingCartProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      buttonValidation: this.buttonValidation,
      addToCart: this.addToCart,
      shoppingCart: [],
      removeCartRow: this.removeCartRow,
      totalAmount: this.totalAmount,
      expressChecked: this.expressChecked,
      regularChecked: this.regularChecked,
      freeChecked: this.freeChecked,
      isDateTrue: false,
      date: 0,
      radio: "",
      shipping: this.shipping,
      shippingAmount: 0,
    };
  }

  expressChecked = () => {
    if (this.state.radio === "Express") {
      return true;
    } else {
      return false;
    }
  };
  regularChecked = () => {
    if (this.state.radio === "Regular") {
      return true;
    } else {
      return false;
    }
  };
  freeChecked = () => {
    if (this.state.radio === "Free") {
      return true;
    } else {
      return false;
    }
  };

  buttonValidation = () => {
    if (this.state.isDateTrue) return false;
    return true;
  };

  shipping = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let day = newDate.getDate();
    let zero = 0;

    let express = `${year}-${month <= 10 ? `0${month + 1}` : month + 1}-${
      day < 8 || day > 29 ? `0${day + (2 % 31)}` : day + (2 % 31)
    }`;
    let regular = `${year}-${month <= 10 ? `0${month + 1}` : month + 1}-${
      day < 5 || day > 26 ? `0${day + (5 % 31)}` : day + (5 % 31)
    }`;
    let free = `${year}-${month <= 10 ? `0${month + 1}` : month + 1}-${
      day < 2 || day > 23 ? `0${day + (8 % 31)}` : day + (8 % 31)
    }`;

    if (month < 10) {
      console.log(zero + month);
      month = Number("zero" + month);
    }
    if (day < 10) {
      day = Number("zero" + month);
    }

    if (event.target.value === "Free") {
      this.setState({ radio: "Free" });
      this.setState({ isDateTrue: true });
      this.setState({ date: free });
      this.setState({ shippingAmount: 0 });
    } else if (event.target.value === "Regular") {
      this.setState({ radio: "Regular" });
      this.setState({ isDateTrue: true });
      this.setState({ shippingAmount: "19" });
      this.setState({ date: regular });
    } else if (event.target.value === "Express") {
      this.setState({ radio: "Express" });
      this.setState({ isDateTrue: true });
      this.setState({ date: express });
      this.setState({ shippingAmount: "29" });
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
      shoppingCart: copiedCart.filter((item) => item.product.id !== id),
    });
  };

  addToCart = (product: Product, size: number) => {
    let cartList: CartItem[] = Object.assign([], this.state.shoppingCart);

    let cartItem: CartItem | undefined = cartList.find((itemToFind) => {
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
        count: 1,
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
