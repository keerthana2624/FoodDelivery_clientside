
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartD = () => {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item)} disabled={item.quantity === 1}>
                  -
                </button>
                <button onClick={() => increaseQuantity(item)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
      )}
    </div>
  );
};

export default CartD;
