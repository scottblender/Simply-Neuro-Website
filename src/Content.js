import React from 'react'
import './Content.css'
import Aux from './Auxilliary'
import logo from './assets/images/ICON.png'
const Content = () => {
    return(
        <Aux>
    <div className='Container3'>
    <img className='image'src={logo} alt=''></img>
    <div className='text'>
    <div className="title">
    <h1>Simply Neuroscience</h1>
    </div>
    <div className="paragraph">
    <p>Pursuing the brain, Pursuing the brain, 
      unlocking the future, 
      one neuron at a time. 
      </p>
    </div>
    <div className='learn'>
      <button>Learn more...</button>
    </div>
    </div>
    </div>
    </Aux>
    )
}

export default Content;
