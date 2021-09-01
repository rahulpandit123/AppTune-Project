import react from "react";
import logo from "../image/shopingkartlogo.png";
import "../Style/header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div classNameName='fluid-container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' exact to='/'>
            <h4>Shopping cart</h4>
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse  '
            id='navbarSupportedContent'>
            <ul className='navbar-nav  mb-2 mb-lg-0'>
              <li className='nav-item mx-5'>
                <NavLink
                  className='nav-link active'
                  aria-current='page'
                  exact
                  to='/'>
                  Products
                </NavLink>
              </li>
              <li className='nav-item mx-5'>
                <NavLink className='nav-link' exact to='/cart'>
                  Cart {props.itemQuantity}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
