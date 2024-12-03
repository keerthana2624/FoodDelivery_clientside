
import React, { useState, useEffect } from 'react';
import './Menu.css';
import { useLocation } from 'react-router-dom';
import Notification from './Cart/Notification';

const Menu = () => {
  const location = useLocation();
  const { menuData = [] } = location.state || {};  // Ensure menuData is passed correctly
  const [notification, setNotification] = useState('');
  const [menu, setMenu] = useState(menuData);
  const [isEditing, setIsEditing] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', imageUrl: '', price: '', id: '' });
  const [showAddMenuItemForm, setShowAddMenuItemForm] = useState(false);

  // Debugging to check if menuData is passed correctly
  useEffect(() => {
    console.log('menuData:', menuData);  // This should log the menu data coming from location.state
    if (menuData && menuData.length > 0) {
      setMenu(menuData);
    }
  }, [menuData]);

  const addToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Current Cart:', existingCart);  // Debugging cart before update

    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex >= 0) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...item, quantity: 1 });
    }

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    console.log('Updated Cart:', existingCart);  // Debugging cart after update

    setNotification(`Added ${item.name} to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleAddMenuItem = () => {
    if (!newItem.name || !newItem.imageUrl || !newItem.price || !newItem.id) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    setMenu([...menu, newItem]);
    setShowAddMenuItemForm(false);
    setNewItem({ name: '', imageUrl: '', price: '', id: '' });
  };

  return (
    <div className="menu-container">
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}

      <h1>Menu</h1>
      <div className="menu-list">
        {menu.length === 0 ? (
          <p>No items available in the menu</p>  // Display a message when no items are available
        ) : (
          menu.map((item) => (
            <div key={item.id} className="menu-item">  {/* Use item.id for unique key */}
              <img className="menu-image" src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>

      <button onClick={() => setShowAddMenuItemForm(!showAddMenuItemForm)}>
        {showAddMenuItemForm ? 'Cancel' : 'Add New Menu Item'}
      </button>

      {showAddMenuItemForm && (
        <div className="add-menu-item-form">
          <h3>Add New Menu Item</h3>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newItem.imageUrl}
            onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="ID"
            value={newItem.id}
            onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
          />
          <button onClick={handleAddMenuItem}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
