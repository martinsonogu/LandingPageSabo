import React from 'react'
import './openAccount.scss'
import { CheckboxGreenSVG } from '../../../assets/icons/icons'
import Phone from '../../../assets/images/openAccount.png'

const openAccount = () => {
  return (
    <div className='openAccountContainer'>
        <div className='openAccountContainerWrapper'>
        <div className='openAccountMainContent'>
          <div className='openAccountMainContentLeft'>
            <h2 className='openAccountTitle'>Open bank account today</h2>
            <p className='openAccountParagraph'>Why do you need to go to bank to open bank account when you
             can open your own bank account at home with iPay app. 
 
            </p>
            <div className='openAccountActivitiesContainer'>
              <div className='openAccountActivityContainer'>
                 <p className='OAactivity1a'><CheckboxGreenSVG/></p>
                 <p className='OAactivity1b'>
                 Savings account to receive and send payment to all Nigerian banks.
                  </p>
              </div>
              <div className='openAccountActivityContainer'>
                 <p className='OAactivity1a'><CheckboxGreenSVG/></p>
                 <p className='OAactivity1b'>
                 Virtual account  to use and receive payment and spend on iPay. 
                  </p>
              </div>
              <div className='openAccountActivityContainer'>
                 <p className='OAactivity1a'><CheckboxGreenSVG/></p>
                 <p className='OAactivity1b'>
                    Current account to run your business and carry out huge transactions. 
                  </p>
              </div>

            </div>
          </div>
          <div className='openAccountMainContentRight'>
            <div className='openAccountMainContentRightWrapper'>
            <img src={Phone} alt='' className='openAccountphoneImageRight' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default openAccount