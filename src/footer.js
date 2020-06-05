import React from 'react'
import insta from './assets/images/insta.png'
import twitter from './assets/images/twitter.png'
import medium from './assets/images/medium.png'
import './footer.css'
const footer = () => {
    return(
        <div className='Container1'>
            <h3>Follow us on our socials!</h3>
            <img src = {insta} alt = ''></img>
            <img src = {twitter} alt = ''></img>
            <img src = {medium} alt = ''></img>
        </div>
    )
}
export default footer;