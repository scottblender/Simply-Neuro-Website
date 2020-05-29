import React from 'react'
import Chinmayi from './assets/images/chinmayi.png'
import './InfoHolder.css'
import useLockBodyScroll from './useLockBodyScroll'
import Aux from './Auxilliary'
const InfoHolder = () => {
    useLockBodyScroll()
    return(
        <Aux>
        <div className='Container'>
        <img className='InfoChinmayi' src={Chinmayi} alt=''>
        </img>
        <p className='InfoChinmayiText'>My name is Chinmayi.</p>
        </div>
        <div></div>
        </Aux>
    )
}
export default InfoHolder;