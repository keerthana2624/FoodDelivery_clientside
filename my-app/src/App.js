import React from 'react'
import Login from './components/login_register/Login'
import Register from './components/login_register/Register'
import Header from './components/Header_Footer/Header'
import Footer from './components/Header_Footer/Footer'
import RestaurantList from './components/RestaurantList'
import Cart from './components/Cart/Cart';
const App = () => {
  return (
    <div className='App'>
      <Header/>
        {/* <Login/>
        <Register/> */}
        <RestaurantList/>
      <Footer/>
      
    </div>
  )
}

export default App
