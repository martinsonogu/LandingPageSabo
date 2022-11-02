import React from 'react'
import './banktransfer.scss'
import Phone from '../../assets/images/Phones.png'

const bankTransfer = () => {
  return (
    <div className='bankTransferContainer'>
      <div className='bankTransferContainerWrapper'>
        <div className='bankTransferMainContent'>
          <div className='bankTransferMainContentLeft'>
            <div className='bankTransferMainContentLeftWrapper'>
              <img src={Phone} alt='' className='bankTransImageLeft' />
            </div>
          </div>
          <div className='bankTransferMainContentRight'>
            <div className='bankTransferMainContentRightWrapper'>
              <h2 className='bankTransferMCRHeader'>
                Send and Receive Bank Transfer
              </h2>
              <p className='bankTransferMCRParagraph'>Send and accept payment with a dedicated account number from all Nigeria banks. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bankTransfer