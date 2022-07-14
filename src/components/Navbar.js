import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src ={Logo} alt="img space" />
         
        </div>
        <div className="navlink">
            <Link className='nav' to="/">Home</Link>
            <Link className='nav' to="/menu">Menu</Link>
            <Link className='nav' to="/contact">Contact</Link>
            <Link className='nav' to="/about">About</Link>
        </div>

    </div>
  )
}

export default Navbar