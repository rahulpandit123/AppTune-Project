import React from "react";
import "../Style/products.css";
// import product1 from "../image/Samsung-Galaxy-A70.jpg";
import { Redirect } from "react-router-dom";
import Cart from "./cart";

const product = ({ id, title, description, price, img, quantity }) => {
  const cartHandler = () => {
    // Redirect = { Cart };
    let item;
    // window.location.href = (

    // );
    console.log("id -", id);
  };
  return (
    <div className='container border p-2 m-4 shadow d-flex flex-column align-items-center'>
      <img src={img} className='prodImg' alt='product image' />
      <div className='prodDetail '>
        <h4 className='title'> {title}</h4>
        <p className='desc'>{description}</p>
        <h3 className='price'>{price}</h3>
        <button
          className='btn btn-primary m-2 '
          onClick={
            <Cart
              itemDeatail={(id, title, description, price, img, quantity)}
            />
          }>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default product;
