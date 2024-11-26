import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import useCart hook
// import './Cart.css'


const Cart = () => {
  const { cartItems } = useCart(); // Get cartItems from context

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button className="remove-button">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;