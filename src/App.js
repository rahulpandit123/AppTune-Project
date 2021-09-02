import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Products from "./Components/products";
import Cart from "./Components/cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Products items={items} setItems={setItems} />
        </Route>
        <Route path='/cart'>
          <Cart items={items} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
