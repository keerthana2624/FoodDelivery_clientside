// src/components/Checkout.jsx
import React, { useState } from 'react';
import './Checkout.css'; // Create this file for custom styles

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order placement logic here (e.g., API call)
    alert('Order placed successfully!'); // Simple confirmation
    // Reset form data if needed
    setFormData({
      name: '',
      address: '',
      paymentMethod: '',
    });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="place-order-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
