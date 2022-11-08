import React from 'react'
import './giveaway.scss'
import Phone from '../../../assets/images/commingSoon.png'

const giveaway = () => {
  return (
    <div className='servicesContainer'>
      <div className='servicesContainerWrapper'>
        <div className='servicesMainContent'>
          <div className='servicesMainContentLeft'>
            <div className='servicesMainContentLeftWrapper'>
              <img src={Phone} alt='' className='servicesImageLeft' />
            </div>
          </div>
          <div className='servicesMainContentRight'>
            <div className='servicesMainContentRightWrapper'>
              <h2 className='servicesMCRHeader'>
                Trending Giveaway
              </h2>
              <p className='servicesMCRParagraph'>
              You will also have access to any giveaway
               on the app and can even do giveaway to your
                customers, followers or general giveaway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default giveaway