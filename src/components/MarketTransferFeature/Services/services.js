import React from 'react'
import './services.scss'
import Phone from '../../../assets/images/services.png'

const services = () => {
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
                Services&Artisans
              </h2>
              <p className='servicesMCRParagraph'>
                Are you looking to repair your furniture or see a
               salon in your new environment? On IPAY APP, 
               you can see and order home services of any artisan
                that is close to your door step 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services