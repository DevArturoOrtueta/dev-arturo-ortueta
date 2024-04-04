import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            A
        </div>
        <div className='navbar-menu'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}