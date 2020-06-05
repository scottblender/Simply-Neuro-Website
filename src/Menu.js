import React from 'react'
import './Menu.css'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
export default ({close}) => {
    return(
        <div className ='menu'>
        <ul>
            <li onClick = {close}><Link to='/'>Home</Link></li>
            <li onClick = {close} ><Link to='/AboutUs'>About Us</Link></li>
            <li onClick = {close}><Link to='/OurTeam'>Our Team</Link></li>
            <li onClick = {close}><Link to='/Partners'>Partners</Link></li>
        </ul>
        </div>
    )
}
