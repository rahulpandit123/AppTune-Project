import React from "react";
import Footer from "./footer";
import Header from "./header";
import product1 from "../image/Samsung-Galaxy-A70.jpg";

const cart = ({ id, title, description, price, img, quantity }) => {
  console.log("ID in Props of Cart -> ", id);
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='border d-flex justify-content-between align-items-center p-2 '>
          <img
            src={img}
            className=''
            style={{ width: "6rem " }}
            alt='product image'
          />
          <p className='title'>{title} Samsung Galaxy A70</p>

          <p className='price'>{price}Price:25,845 INR</p>
          <div className='d-flex align-items-center '>
            <button className='btn btn-success '>+</button>
            <p className='my-auto mx-3'>{3}</p>
            <button className='btn btn-success'> - </button>
          </div>
          <h5>452</h5>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default cart;
