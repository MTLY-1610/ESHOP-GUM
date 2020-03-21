import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/products"> Products</NavLink>
          <NavLink to="/cart"> Cart</NavLink>
        </nav>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </div>
      </div>
    </Router>
  );
}

export default App;
