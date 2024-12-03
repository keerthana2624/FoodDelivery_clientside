import React from 'react'
import './RestaurantList.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';



const restaurantData = [
  { id : 1,
    name: 'Bawarchi',
    description: 'Famous for Hyderabadi Biryani with rich flavors and spices.',
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
    menu: [
      { id: 'B01',name: 'Chicken Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$12.99' },
      { id: 'B02',name: 'Paneer Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$10.99' },
      { id: 'B03',name: 'Mutton Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$14.99' },
      { id: 'B04',name: 'Egg Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$9.99' },
      { id: 'B05',name: 'Veg Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$8.99' }
    ]
  },
  { id: 2,
    name: 'Paradise Restaurant',
    description: 'Iconic spot known for its legendary biryani and Mughlai cuisine.',
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
    menu: [
      { id: 'PR01',name: 'Mutton Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$14.99' },
      { id: 'PR02',name: 'Hyderabadi Chicken', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$13.49' },
      { id: 'PR03',name: 'Kebab Platter', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$16.99' },
      { id: 'PR04',name: 'Chicken 65', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$9.99' },
      { id: 'PR05',name: 'Chilli Chicken', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$15.49' }
    ]
  },
  { id: 3,
    name: 'Shah Ghouse',
    description: 'Popular for authentic Hyderabadi dishes and kebabs.',
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
    menu: [
      { id: 'SG01',name: 'Haleem', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$10.99' },
      { id: 'SG02',name: 'Mutton Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$14.49' },
      { id: 'SG03',name: 'Chicken Biryani', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$12.99' },
      { id: 'SG04',name: 'Kebabs', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$8.99' },
      { id: 'SG05',name: 'Tandoori Chicken', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$11.99' }
    ]
  },
  { id: 4,
    name: 'Naidu Tiffins',
    description: 'delicious South Indian breakfasts and chutneys.',
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
    menu: [
      { id: 'NT01',name: 'Idli', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$4.99' },
      { id: 'NT02',name: 'Dosa', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$5.99' },
      { id: 'NT03',name: 'Uttapam', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$6.99' },
      { id: 'NT04',name: 'Vada', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$4.49' },
      { id: 'NT05',name: 'Poori Bhaji', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$7.99' }
    ]
  },
  { id : 5,
    name: 'Chinese Food',
    description: 'Restaurant serving Indian, Chinese, and Continental dishes.',
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
    menu: [
      {id:'CF01', name: 'Hakka Noodles', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$10.49' },
      {id:'CF02', name: 'Paneer Butter Masala', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$12.49' },
      {id:'CF03', name: 'Fried Rice', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$9.99' },
      {id:'CF04', name: 'Chicken Manchurian', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$11.99' },
      { id:'CF05',name: 'Veg Spring Rolls', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$8.49' }
    ]
  },
  { id: 6,
    name: ' VarLakshmi Tiffins',
    description: 'Popular for South Indian vegetarian dishes and coffee.',
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
    menu: [
      { id: 'VT01',name: 'Masala Dosa', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$6.49' },
      { id: 'VT02',name: 'Idli Sambar', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$5.49' },
      { id: 'VT03',name: 'Medu Vada', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$4.49' },
      { id: 'VT04',name: 'Filter Coffee', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$2.99' },
      { id: 'VT05',name: 'Onion Rava Dosa', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$7.49' }
    ]
  },
  {   id:7,
      name: 'BBQ Nation',
      description: 'All-you-can-eat restaurant offering a wide variety of barbecue options.',
      imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
      menu: [
        { id: 'BN01',name: 'Grilled Chicken', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$15.99' },
        { id: 'BN02',name: 'Paneer Tikka', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$11.49' },
        { id: 'BN03',name: 'Tandoori Prawns', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$18.99' },
        { id: 'BN04',name: 'Chicken Wings', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$12.49' },
        { id: 'BN05',name: 'Veg Seekh Kebabs', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$9.99' },
        { id: 'BN06',name: 'Lamb Chops', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$19.49' },
        { id: 'BN07',name: 'Fish Tikka', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$16.99' },
        { id: 'BN08',name: 'Garlic Naan', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$3.49' },
        { id: 'BN09',name: 'Stuffed Paratha', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$4.49' },
        { id: 'BN10',name: 'Brownie with Ice Cream', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$6.99' }
      ]
    },
    

     { id : 8, 
    name: 'The Vegan Delight',
    description: 'Healthy and delicious plant-based meals for everyone.',
    imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg',
    menu: [
      { id: 'TVD01',name: 'Vegan Burger', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$9.99',  },
      { id: 'TVD02',name: 'Vegan Tacos', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$8.49' },
      { id: 'TVD03',name: 'Quinoa Salad', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$7.99' },
      { id: 'TVD04',name: 'Vegan Sushi', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$11.99' },
      { id: 'TVD05',name: 'Chickpea Wrap', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$8.99' },
      { id: 'TVD06',name: 'Falafel Plate', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$10.49' },
      { id: 'TVD07',name: 'Vegan Pancakes', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$6.99' },
      { id: 'TVD08',name: 'Stuffed Avocados', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$9.49' },
      { id: 'TVD09',name: 'Lentil Soup', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$5.99' },
      { id: 'TVD10',name: 'Chia Pudding', imageUrl: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg', price: '$4.99' }
    ]
  },
  
  // New Restaurant 2
  { id: 9,
    name: 'The Chinese Bowl',
    description: 'A restaurant offering a variety of authentic Chinese dishes.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { id: 'TCB01',name: 'Fried Rice', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$8.99' },
      { id: 'TCB02',name: 'Chicken Manchurian', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$10.99' },
      { id: 'TCB03',name: 'Hakka Noodles', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$9.49' },
      { id: 'TCB04',name: 'Sweet and Sour Chicken', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$11.99' },
      { id: 'TCB05',name: 'Spring Rolls', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$6.99' },
      { id: 'TCB06',name: 'Szechuan Chicken', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.99' },
      { id: 'TCB07',name: 'Kung Pao Prawns', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$14.99' },
      { id: 'TCB08',name: 'Dim Sum Platter', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$9.99' },
      { id: 'TCB09',name: 'Crispy Tofu', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$7.99' },
      { id: 'TCB10',name: 'Hot and Sour Soup', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$5.49' }
    ]
  },

  // New Restaurant 3
  { id: 10,
    name: 'Italiano',
    description: 'Authentic Italian restaurant serving wood-fired pizzas and pasta.',
    imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
    menu: [
      { id: 'I01',name: 'Margherita Pizza', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$11.99' },
      { id: 'I02',name: 'Pepperoni Pizza', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$13.49' },
      { id: 'I03',name: 'Fettuccine Alfredo', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.99' },
      { id: 'I04',name: 'Lasagna', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$14.49' },
      { id: 'I05',name: 'Bruschetta', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$7.99' },
      { id: 'I06',name: 'Caesar Salad', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$9.49' },
      { id: 'I07',name: 'Tiramisu', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$6.99' },
      { id: 'I08',name: 'Spaghetti Carbonara', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$13.49' },
      { id: 'I09',name: 'Mushroom Risotto', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$12.49' },
      { id: 'I10',name: 'Garlic Bread', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg', price: '$4.99' }
    ]
  },

  
 
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