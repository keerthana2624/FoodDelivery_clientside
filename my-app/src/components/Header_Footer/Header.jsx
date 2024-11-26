import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
    <h1 className='title'>Food Delivery</h1>
    <nav className='nav-bar'>
        <ul className='nav-list'>
            <li className='nav-item'><a href='#'>Home</a></li>
            <li className='nav-item'><a href='#'>About</a></li>
            <li className='nav-item'><a href='#'>Menu</a></li>
            <li className='nav-item'><a href='#'>Cart</a></li>
        </ul>
    </nav>
    </header>
  )
}

export default Header
