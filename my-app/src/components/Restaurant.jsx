import React from 'react'
import './RestaurantList.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';



const restaurantData = [
  {
    name: 'Biryani Palace',
    description: 'Famous for Hyderabadi Biryani with rich flavors and spices.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Chicken Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.99' },
      { name: 'Paneer Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$10.99' },
      { name: 'Mutton Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$14.99' },
      { name: 'Egg Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$9.99' },
      { name: 'Veg Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$8.99' }
    ]
  },
  {
    name: 'Paradise Restaurant',
    description: 'Iconic spot known for its legendary biryani and Mughlai cuisine.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Mutton Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$14.99' },
      { name: 'Hyderabadi Chicken', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$13.49' },
      { name: 'Kebab Platter', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$16.99' },
      { name: 'Chicken 65', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$9.99' },
      { name: 'Nihari', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$15.49' }
    ]
  },
  {
    name: 'Shah Ghouse',
    description: 'Popular for authentic Hyderabadi dishes and kebabs.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Haleem', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$10.99' },
      { name: 'Mutton Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$14.49' },
      { name: 'Chicken Biryani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.99' },
      { name: 'Kebabs', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$8.99' },
      { name: 'Tandoori Chicken', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$11.99' }
    ]
  },
  {
    name: 'Chutneys',
    description: 'Renowned for its delicious South Indian breakfasts and chutneys.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Idli', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$4.99' },
      { name: 'Dosa', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$5.99' },
      { name: 'Uttapam', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$6.99' },
      { name: 'Vada', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$4.49' },
      { name: 'Poori Bhaji', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$7.99' }
    ]
  },
  {
    name: 'Olive Bistro',
    description: 'A cozy restaurant offering Mediterranean and European cuisine.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Greek Salad', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$8.99' },
      { name: 'Margherita Pizza', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.99' },
      { name: 'Pasta Alfredo', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$11.99' },
      { name: 'Grilled Chicken', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$15.49' },
      { name: 'Tiramisu', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$6.99' }
    ]
  },
  {
    name: 'Ohri\'s 70mm',
    description: 'Themed restaurant serving Indian, Chinese, and Continental dishes.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Hakka Noodles', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$10.49' },
      { name: 'Paneer Butter Masala', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.49' },
      { name: 'Fried Rice', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$9.99' },
      { name: 'Chicken Manchurian', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$11.99' },
      { name: 'Veg Spring Rolls', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$8.49' }
    ]
  },
  {
    name: 'Minerva Coffee Shop',
    description: 'Popular for South Indian vegetarian dishes and coffee.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Masala Dosa', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$6.49' },
      { name: 'Idli Sambar', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$5.49' },
      { name: 'Medu Vada', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$4.49' },
      { name: 'Filter Coffee', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$2.99' },
      { name: 'Onion Rava Dosa', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$7.49' }
    ]
  },
  {
    name: 'Tatva',
    description: 'Elegant restaurant known for its vegetarian fusion cuisine.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { name: 'Tandoori Paneer', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$11.99' },
      { name: 'Veg Hakka Noodles', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$10.49' },
      { name: 'Paneer Tikka Masala', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.49' },
      { name: 'Dal Makhani', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$9.99' },
      { name: 'Malai Kofta', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$10.99' }
    ]
  }
];


const RestaurantList = () => {
  const [showAddRestaurantForm, setShowAddRestaurantForm] = useState(false);
  const [restaurants, setRestaurants] = useState(restaurantData); // State for restaurants
  const [newRestaurant, setNewRestaurant] = useState({ name: '', description: '', imageUrl: '' });
  const [isEditing, setIsEditing] = useState(null); // Track which restaurant is being edited
  const navigate = useNavigate();

  const handleViewMenu = (restaurant) => {
    navigate(`/menu/${restaurant.name}`, { state: { menuData: restaurant.menu } }); // Pass restaurant name in the URL and the menu in state
  };

  // Handle editing a restaurant
  const handleEdit = (index) => {
    setIsEditing(index);
  };

  // Save changes after editing
  const handleSave = (index) => {
    setIsEditing(null);
  };

  // Handle input change when editing
  const handleInputChange = (index, field, value) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants[index][field] = value;
    setRestaurants(updatedRestaurants);
  };

  // Handle adding a new restaurant
  const handleAddRestaurant = () => {
    setRestaurants([...restaurants, newRestaurant]);
    setShowAddRestaurantForm(false); // Hide form after submission
    setNewRestaurant({ name: '', description: '', imageUrl: '' });
  };

  
  

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-card">
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={restaurant.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                value={restaurant.description}
                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
              />
              <input
                type="text"
                value={restaurant.imageUrl}
                onChange={(e) => handleInputChange(index, 'imageUrl', e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              <img className="restaurant-image" src={restaurant.imageUrl} alt={restaurant.name} />
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <p className="restaurant-description">{restaurant.description}</p>
              <button onClick={() => handleViewMenu(restaurant)}>View Menu</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </div>
      ))}

<button onClick={() => setShowAddRestaurantForm(!showAddRestaurantForm)}>
        Add New Restaurant
      </button>

      {showAddRestaurantForm && (
        <div className="add-restaurant-form">
          <h3>Add New Restaurant</h3>
          <input
            type="text"
            placeholder="Restaurant Name"
            value={newRestaurant.name}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newRestaurant.description}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newRestaurant.imageUrl}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, imageUrl: e.target.value })}
          />
          <button onClick={handleAddRestaurant}>Submit</button>
        </div>
      )}
    </div>
  );
};


  
  export default RestaurantList;