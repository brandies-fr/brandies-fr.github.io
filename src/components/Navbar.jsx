import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
            <ul className='navbar-menu'>
            <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/cepage">Cepage</Link></li>
            </ul>
    </div>
  )
}
