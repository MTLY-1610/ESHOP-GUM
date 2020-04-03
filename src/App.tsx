import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import NoPage from "./components/NoPage";
import Checkout from "./components/Checkout";
import "./App.css";
import Payment from "./components/Payment";

function App() {
  return (
    <Router basename="/sneakers">
      <div className="container">
        <div className="layout-navbar-flex">
          <Navbar />
        </div>
        <div className="layout-only-for-flex">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/:item" component={Item} />
            <Route component={NoPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
