import React from 'react'

function Cart() {

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>{
      cartItems.map(item => (
        <div>
          <img src={item.thumbnail} />
          <h3>{item.title}</h3>
          <p>₹ {item.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))
    }</div>
  )
}

export default Cart