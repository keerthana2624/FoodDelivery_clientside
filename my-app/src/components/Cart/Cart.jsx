import React from 'react';
import { useCart } from './CartContext'; // Import useCart hook
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Get cart functions
  const navigate = useNavigate(); // Initialize navigate

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    // Extract numerical part of price (remove any non-numeric characters)
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = item.quantity || 1; // Ensure quantity is at least 1
    return total + price * quantity;
  }, 0);

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
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="quantity-controls">
                <button 
                  className="quantity-button"
                  onClick={() => decreaseQuantity(item)}
                  disabled={item.quantity === 1} // Disable if quantity is 1
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span> {/* Display quantity */}
                <button 
                  className="quantity-button"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
              </div>
              <button 
                className="remove-button"
                onClick={() => removeFromCart(item)} // Remove item from cart
              >
                Remove
              </button>
            </div>
          ))}
          {/* Display total amount */}
          <div className="cart-total">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3> {/* Total amount with 2 decimal places */}
          </div>
        </div>
      )}
      {/* Add a button to proceed to checkout */}
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
