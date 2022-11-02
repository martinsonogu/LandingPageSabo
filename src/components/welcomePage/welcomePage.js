import React from 'react'
import { IpayLogoSVG, AppleSVG, PlaystoreSVG } from '../../assets/icons/icons'
import './welcomePage.scss'
import MockUp from '../../assets/images/Mockup.png'
import HomeKey from '../../assets/images/HomeKeys.png'
import { FlowerPotSVG } from '../../assets/icons/icons'


const welcomePage = () => {
  return (
    <div className='WelPAgeContainer'>
      <nav className='NavContainer' > 
        <div className='NavWrapper'>
          <div className='NavItems'>
            <p> <IpayLogoSVG/> </p>
            <div className='buttonsConatiner'>
              <button className='signup'>Sign up</button>
              <button className='signin'>Sign in</button>
            </div>
          </div>

        </div>
      </nav>
      <main className='mainContainer'> 
        <div className='mainContainerWrapper'>
          <div className='mainContainerLeft'>
            <p className='smartway'>SMART WAY</p>
            <p className='buy'>To Buy and Sell</p>
            <p className='paragraph'>
              Send, receive, pay for anything with @iPaytag, settle instantly for free and secured,
               explore the cities for the best deals nearest to you, smart payment tools for businesses. 
            </p>
            <div className='appStoreContainer'>
              <p className='apple'><AppleSVG/></p>
              <p><PlaystoreSVG/></p>
            </div>
            <button className='getStarted'>Get Started</button>
          </div>
          <div className='mainContainerRight'>
            <div className='mainContainerRightWrapper'>
                <img src='' className='homekey' alt='' />
                
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default welcomePage