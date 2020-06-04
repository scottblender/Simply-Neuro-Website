import React, {useState} from 'react'
import Chinmayi from './assets/images/chinmayi.png'
import './InfoHolder.css'
import useLockBodyScroll from './useLockBodyScroll'
import Aux from './Auxilliary'
const InfoHolder = () => {
    const [isHovering, setHovering] = useState(false);
    const [isHovering2, setHovering2] = useState(false);;;
    useLockBodyScroll()
    return(
        <Aux>
        <div className='Container'>
        <div>
        <img onMouseEnter={() => setHovering(!isHovering)} onMouseLeave={() => setHovering(!isHovering)}src={Chinmayi} alt=''>
        </img>
        {isHovering ?  <p>My name is Chinmayi</p> : ''}
        </div>
        <div>
        <img onMouseEnter={() => setHovering2(!isHovering2)} onMouseLeave={() => setHovering2(!isHovering2)}src={Chinmayi} alt=''>
        </img>
        {isHovering2 ?  <p>My name is Chinmayi</p> : ''}
        </div>
        </div>
        </Aux>
    )
}
export default InfoHolder;