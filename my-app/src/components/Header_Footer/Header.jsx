import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
    <h1 className='title'>Food Delivery</h1>
    <nav className='nav-bar'>
        <ul className='nav-list'>
            <li className='nav-item'><a href='/restaurants'>Home</a></li>
            <li className='nav-item'><a href='/about'>About</a></li>
            {/* <li className='nav-item'><a href='/menu'>Menu</a></li> */}
            <li className='nav-item'><a href='/cart'>Cart</a></li>
        </ul>
    </nav>
    </header>
  )
}

export default Header
