import React from 'react'
import Login from './components/login_register/Login'
import Register from './components/login_register/Register'
import Header from './components/Header_Footer/Header'

const App = () => {
  return (
    <div className='App'>
      <Header/>
        <Login/>
        <Register/>
      <Footer/>
      
    </div>
  )
}

export default App
