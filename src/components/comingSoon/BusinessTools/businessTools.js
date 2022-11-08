import React from 'react'
import './businessTools.scss'
import Phone from '../../../assets/images/commingSoon.png'

const businessTools = () => {
  return (
    <div className='barrierContainer'>
      <div className='barrierContainerWrapper'>
        <div className='barrierMainContent'>
          <div className='barrierMainContentLeft'>
            <h2 className='barrierTitle'>Bussiness tools</h2>
            <p className='barrierParagraph'>
            We are about to unvail the new look of your business
             approuch and strategy with out smart business tool 
             that is coming soon, stay tuned.
            </p>
            
          </div>
          <div className='ePaymentMainContentRight'>
            <div className='ePaymentMainContentRightWrapper'>
            <img src={Phone} alt='' className='ephoneImageRight' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default businessTools