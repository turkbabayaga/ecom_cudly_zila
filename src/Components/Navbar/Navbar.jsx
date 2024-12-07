import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Cudly Zilla</p>
        </div>
        <ul className="nav-menu">
            <li>
                <Link style={{ textDecoration: 'none'}} to='/' onClick={()=>setMenu("shop")}>Shop</Link>
                {menu==="shop"?<hr/>:<></>}
            </li>
            <li>
                <Link style={{ textDecoration: 'none'}} to='/mens' onClick={()=>setMenu("mens")}>Men</Link>
                {menu==="mens"?<hr/>:<></>}
            </li>
            <li>
                <Link style={{ textDecoration: 'none'}} to='/women' onClick={()=>setMenu("womens")}>Women</Link>
                {menu==="womens"?<hr/>:<></>}
            </li>
            <li>
                <Link style={{ textDecoration: 'none'}} to='/kid' onClick={()=>setMenu("kids")}>Kids</Link>
                {menu==="kids"?<hr/>:<></>}
            </li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
