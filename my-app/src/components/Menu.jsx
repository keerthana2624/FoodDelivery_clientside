import React,{useState} from 'react';
import './Menu.css'
// import { useLocation } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './Cart/CartContext'; // Import useCart hook
import Notification from './Cart/Notification';


const Menu = () => {
  const location = useLocation();
  const { menuData } = location.state; // Get menuData from location's state
  const { addToCart } = useCart(); // Use the addToCart function from context
  const [notification, setNotification] = useState('');
  const [menu, setMenu] = useState(menuData); // State to manage menu data
  const [isEditing, setIsEditing] = useState(null); // Track which menu item is being edited
  const [newItem, setNewItem] = useState({ name: '', imageUrl: '', price: '' });
  const [showAddMenuItemForm, setShowAddMenuItemForm] = useState(false);

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index) => {
    setIsEditing(null);
  };

  const handleInputChange = (index, field, value) => {
    const updatedMenu = [...menu];
    updatedMenu[index][field] = value;
    setMenu(updatedMenu);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`Added ${item.name} to cart!`);
  };

  // Handle adding a new menu item
  const handleAddMenuItem = () => {
    setMenu([...menu, newItem]);
    setShowAddMenuItemForm(false); // Hide form after submission
    setNewItem({ name: '', imageUrl: '', price: '' });
  };

  return (
    <div>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification('')} // Allow closing the notification
        />
      )}
      <div className="menu-list">
        {menu.map((item, index) => (
          <div key={index} className="menu-item">
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  value={item.imageUrl}
                  onChange={(e) => handleInputChange(index, 'imageUrl', e.target.value)}
                />
                <input
                  type="text"
                  value={item.price}
                  onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </>
            ) : (
              <>
                <img className="menu-image" src={item.imageUrl} alt={item.name} />
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-price">{item.price}</p>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>

      <button onClick={() => setShowAddMenuItemForm(!showAddMenuItemForm)}>
        Add New Menu Item
      </button>

      {showAddMenuItemForm && (
        <div className="add-menu-item-form">
          <h3>Add New Menu Item</h3>
          <input
            type="text"
            placeholder="Item Name"
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
            type="text"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <button onClick={handleAddMenuItem}>Submit</button>
        </div>
      )}
    </div>
  );
};
export default Menu;