import React from 'react'
import './Menu.css'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
const menu = () => {
    return(
        <div className ='menu'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/InfoHolder'>About Us</Link></li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>Blog</li>
        </ul>
        </div>
    )
}
export default menu;
