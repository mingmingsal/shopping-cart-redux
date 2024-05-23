import React from 'react'
import './Header.css'
import profilePhoto from '../assets/images/account_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import cartPhoto from '../assets/images/shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24.svg'

const Header = () => {
  return (
    <nav>
        <p className='logo'>HANOVER AND TYKE</p>
        <ul className='links'>
            <li><a>New Arrivals</a></li>
            <li><a>Collections</a></li>
            <li><a>About Us</a></li>
        </ul>
        <ul className='accountLinks'>
        <li><a><img src={cartPhoto}/></a></li>
            <li><a><img src={profilePhoto}/></a></li>
            
        </ul>
    </nav>
  )
}

export default Header