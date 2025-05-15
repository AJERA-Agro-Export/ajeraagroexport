import React, { useContext, useEffect, useState } from 'react'
import './Viewcart.css'
import { Product } from './Product';
import { cartContext } from '../cartContext';

export const Viewcart = () => {
  const {cart, setCart} = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=> acc+parseInt(curr.amt),0))
  },[cart])
  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product)=>(
          <div className="cart-product" key={product.id}>
          <div className="img">
            <img src={product.pic} alt="" />
          </div>
        <div className="card-product-detail">
          <h3>{product.name}</h3>
          <p>Price Rs : {product.amt}</p>
        </div>
      </div>
        ))} 
    </div>
    <h2  className='cart-amt'>Total Amount Rs : {total}</h2>
    </>
  )
}
