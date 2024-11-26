import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import RestaurantList from './components/RestaurantList'
import Menu from './components/Menu';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Cart/CartContext';
// import Login from './components/login_register/Login'
// import Register from './components/login_register/Register'
import Checkout from './components/Checkout/Checkout';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/menu/:restaurantName" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
};
export default App
