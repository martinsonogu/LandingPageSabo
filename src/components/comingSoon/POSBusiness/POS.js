import React from 'react'
import './POS.scss'
import Phone from '../../../assets/images/commingSoon.png'

const POS = () => {
  return (
    <div className='exploreContainer'>
        <div className='exploreContainerWrapper'>
        <div className='exploreMainContent'>
          <div className='exploreMainContentLeft'>
            <h2 className='exploreTitle'>POS Business services</h2>
            <p className='exploreParagraph'> 
            The unvailing of our POS services can now give users 
            the oppurtunity to apply online and get the POS delivered
             to them anyhere in Nigeria to make business. Isnt this amazing!
            </p>
           
          </div>
          <div className='exploreMainContentRight'>
            <div className='exploreMainContentRightWrapper'>
            <img src={Phone} alt='' className='explorephoneImageRight' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default POS