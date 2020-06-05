import React from 'react'
import './Menu.css'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
export default ({close}) => {
    return(
        <div className ='menu'>
        <ul>
            <li onClick = {close}><Link to='/'>Home</Link></li>
            <li onClick = {close}>About Us</li>
            <li onClick = {close}><Link to='/InfoHolder'>Our Team</Link></li>
            <li onClick = {close}>Partners</li>
            <li onClick = {close}>Blog</li>
        </ul>
        </div>
    )
}
