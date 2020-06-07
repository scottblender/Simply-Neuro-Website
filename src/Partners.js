import React, {useState} from 'react'
import StickerMule from './assets/images/stickermule.png'
import './Partners.css'
import useLockBodyScroll from './useLockBodyScroll'
import Aux from './Auxilliary'

const Partners = () => {
    const [isHovering, setHovering] = useState(false);
    const [isHovering2, setHovering2] = useState(false);;;
    useLockBodyScroll()
    return(
        <Aux>
        <div className='Container'>
        <div>
        <img onMouseEnter={() => setHovering(!isHovering)} onMouseLeave={() => setHovering(!isHovering)}src={StickerMule} alt=''>
        </img>
        {isHovering ?  <p>I am a partner.</p> : ''}
        </div>
        <div>
        <img onMouseEnter={() => setHovering2(!isHovering2)} onMouseLeave={() => setHovering2(!isHovering2)}src={StickerMule} alt=''>
        </img>
        {isHovering2 ?  <p>I am a partner.</p> : ''}
        </div>
        </div>
        </Aux>
    )
}
export default Partners;
