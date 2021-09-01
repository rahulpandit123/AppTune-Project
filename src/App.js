import logo from "./logo.svg";
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
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
