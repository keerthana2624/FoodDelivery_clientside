import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <nav>
            <ul className='footer-list'>
                <li className='footer-item'><a href='#'>Contact Us</a></li>
                <li className='footer-item'><a href='#'>Privacy Policy</a></li>
                <li className='footer-item'><a href='#'>Terms of Service</a></li>
            </ul>
        </nav>
        <p className='footer-text'>@ 2024 Food Delivery App. All Rights Reserved</p>
    </footer>
  )
}

export default Footer
