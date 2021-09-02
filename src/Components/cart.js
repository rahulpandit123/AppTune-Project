import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import product1 from "../image/Samsung-Galaxy-A70.jpg";
import data from "./data";
import "../Style/cart.css";
const cart = ({ items }) => {
  // const [price, setPrice] = useState();
  // console.log("ID in Props of Cart -> ", id);
  // const item = localStorage.getItem("id");
  const res = data.filter((i) => items.includes(i.id));
  console.log("Data from localstorage", res);
  var total = 0;
  var sum = 0;

  const getSum = () => {
    const total = res.reduce((a, b) => parseInt(a) + parseInt(b.price), 0);
    return total;
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='d-flex flex-column  '>
          <h2 className='p-2 m-2  '>Total Price : ₹{getSum()}</h2>

          {res.map((it) => {
            return (
              <div className='border d-flex justify-content-between align-items-center p-2 my-2'>
                <img
                  src={it.img}
                  alt='cart Itemimage'
                  style={{ width: "6rem " }}
                  alt='productImage'
                />
                <p className='title'> {it.title}</p>
                <p className='description'>{it.description}</p>
                <p className='price'>{it.price}</p>
                {/* <div className='d-flex align-items-center '>
                  <button className='btn btn-success '>+</button>
                  <p className='my-auto mx-3'>{it.quantity}</p>
                  <button className='btn btn-success'> - </button>
                </div> */}
                {/* <h5>452</h5> */}
              </div>
            );
          })}

          {/* <img
            src={product1}
            className=''
            style={{ width: "6rem " }}
            alt='product image'
          /> */}
        </div>
      </div>

      {/* {
         for(let i = 0; i<res.length;i++)
          sum += parseInt(res[i].price)
      }
         } */}
      <Footer />
    </div>
  );
};

export default cart;
