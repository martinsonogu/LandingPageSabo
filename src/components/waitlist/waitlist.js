import React from 'react'
import './waitlist.scss'
import { ForwardArrowSVG } from '../../assets/icons/icons'
import Image1 from "../../assets/images/manUnderTree.png"
import Image2 from "../../assets/images/decorTree.png"

const waitlist = () => {
  return (
    <div className='waitlistContainer'>
        <div className='wiatlistWrapper'>
            <div className='waitlistMainContent'>
                <div className='waitlistMainContentOne'>
                    <h1 className='header'>Join our waitlist</h1>
                    <p className='paragraph'>Be a part of the earlybird that register
                     on the platform before it finally arrives
                     </p>
                     <div className='forwardArrowContainer'>
                        <p className='forwardArrow'><ForwardArrowSVG/></p>
                        <p className='fowwardArrowText'>Get early access now!</p>
                     </div>
                </div>
                <div className='WaitlistMainContentTwo'>
                    <img src={Image1} alt='' className='WaitlistMainContentTwo'/>
                </div>
                <div className='waitlistMainContentThree'>
                    <div className='waitlistMainContentThreeImg'style={{backgroundImage: `url(${Image2})`}} ></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default waitlist