import React, { useState } from "react";
import "../Style/products.css";
import Footer from "./footer";
import Header from "./header";
import Product from "./product";
import { data } from "./data";

const Products = ({ items, setItems }) => {
  const [item, setItem] = useState(data);
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {item.map((curItem) => {
              return (
                <Product key={curItem.id} {...curItem} setItems={setItems} />
              );
            })}
          </div>
          {/* <div className='col'>
            <Product />
          </div>
          <div className='col'>
            <Product />
          </div> */}
        </div>
        {/* <div className='row'>
          <div className='col'>
            <Product />
          </div>
          <div className='col'>
            <Product />
          </div>
          <div className='col'>
            <Product />
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Products;
