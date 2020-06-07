import React from 'react'
import insta from './assets/images/insta.png'
import twitter from './assets/images/twitter.png'
import medium from './assets/images/medium.png'
import './footer.css'

// social media links as footers for each page
const footer = () => {
    return(
        <div className='Container1'>
            <h3>Follow us on our socials!</h3>
            <a href="https://www.instagram.com/simplyneuroscience/" target="_blank"><img src = {insta} alt = ''></img></a>
            <a href="https://twitter.com/simplyneurosci?lang=en" target="_blank"><img src = {twitter} alt = ''></img></a>
            <a href="https://medium.com/simply-neuroscience" target="_blank"><img src = {medium} alt = ''></img></a>
        </div>
    )
}
export default footer;