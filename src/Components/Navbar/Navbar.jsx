import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu,setMenu] =useState("smart home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src ={logo} alt =""/>
        <p>TechSphere</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("smart home")}}><Link style ={{ textDecoration: 'none'}}to ='/'>Smart Home</Link>{menu ==="smart home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("house security")}}>House Security{menu ==="house security"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("eshope")}}><Link style ={{ textDecoration: 'none'}}to ='/product'>eShope</Link> {menu ==="eshope"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("contact us")}}>Contact Us{menu ==="contact us"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to ='/Cart'><img src ={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>

      </div>
    </div>
  );
};

export default Navbar;