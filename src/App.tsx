import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import NoPage from "./components/NoPage";
import "./App.css";
import Payment from "./components/Payment";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="layout-navbar-flex">
          <Navbar />
        </div>
        <div className="layout-only-for-flex">
          <div className="layout-content-flex">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/cart" component={Cart} />
              <Route path="/payment" component={Payment} />
              <Route path="/item" component={Item} />
              <Route component={NoPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
