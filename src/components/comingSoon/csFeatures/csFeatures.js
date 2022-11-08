import React from 'react'
import './csFeatures.scss'
import {ZigzagSVG} from '../../../assets/icons/icons'
import CS from '../../../assets/images/commingSoon.png'
import HandOfGod from '../../../assets/images/HandOfGod.png'

const csFeatures = () => {
  return (
    <div className='paymentContainer'>
        <div className='paymentContainerWrapper'>
            <h1 className='paymentTitle'>Coming soon features</h1>
            <p className='paymentIntro'>
            iPay marketing tricks with $iPayTags through celebrities, skits makers. 
            </p>
            <p className='zigzag'>
                <ZigzagSVG/>
            </p>
            <div className='mainPaymentContent'>
                <div className='paymentContentLeft'>
                    <div className='paymentContentLeftWrapper'>
                        <img src={CS} alt='' className='phoneImage' />
                    </div>
                </div>
                <div className='paymentContentRight'>
                    <div className='paymentContentRightWrapper'>
                        <h2 className='paymentContentRightHeader'>IPAY Payment card</h2>
                        <p className='paymentContentRightParagraph'>
                        You can shop and pay bills with our IPAY contactless card anywhere
                         in the world. Very reliable, fast and secured.
                        </p>
                    </div>
                    
                </div>

            </div>
            <div className='handimgContainer'>
                <img src={HandOfGod} alt='' className='handOfGod' />
            </div>
            <div className='buttonContainer'>
                <div className='buttonContainerWrapper'>
                    <p className='button'>Payment</p>
                    <p className='button'>Market</p>
                    <p className='button1'>Coming Soon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default csFeatures