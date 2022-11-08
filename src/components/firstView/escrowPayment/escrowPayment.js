import React from 'react'
import './escrowPayment.scss'
import { CheckboxSVG } from '../../../assets/icons/icons'
import Phone from '../../../assets/images/Phones.png'

const escrowPayment = () => {
  return (
    <div className='ePaymentContainer'>
      <div className='ePaymentContainerWrapper'>
        <div className='ePaymentMainContent'>
          <div className='ePaymentMainContentLeft'>
            <h2 className='epaymentTitle'>Escrow Payment</h2>
            <p className='epaymentParagraph'>Use escrow to buy and sell in a secure way. 
                Release the payment once you are satisfied with the goods and services 
            </p>
            <div className='ePaymentActivitiesContainer'>
              <div className='ePaymentActivityContainer'>
                 <p className='activity1a'><CheckboxSVG/></p>
                 <p className='activity1b'>
                  Receive payment instantly once the buyer releases the fund. 
                  </p>
              </div>
              <div className='ePaymentActivityContainer'>
                 <p className='activity1a'><CheckboxSVG/></p>
                 <p className='activity1b'>
                  Return the goods if you are not satisfied. 
                  </p>
              </div>
              <div className='ePaymentActivityContainer'>
                 <p className='activity1a'><CheckboxSVG/></p>
                 <p className='activity1b'>
                 Appeal or cancel the transaction if you change your mind. 
                  </p>
              </div>

            </div>
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

export default escrowPayment