import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';
import Cart from './components/Cart/Cart';
// import { CartProvider } from './components/Cart/CartContext';
import Login from './components/login_register/Login';
import Register from './components/login_register/Register';
import Checkout from './components/Checkout/Checkout';
import About from './components/header_Footer_Components/About';
import ContactUs from './components/header_Footer_Components/ContactUs';
import PrivacyPolicy from './components/header_Footer_Components/PrivacyPolicy';
import TermsOfService from './components/header_Footer_Components/TermsOfService';

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu/:restaurantName" element={<Menu />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
