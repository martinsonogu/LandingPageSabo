import React from 'react'
import './barrier.scss'
import { CheckboxBrownSVG } from '../../../assets/icons/icons'
import Phone from '../../../assets/images/barrier.png'

const barrier = () => {
  return (
    <div className='barrierContainer'>
      <div className='barrierContainerWrapper'>
        <div className='barrierMainContent'>
          <div className='barrierMainContentLeft'>
            <h2 className='barrierTitle'>The barrier is broken</h2>
            <p className='barrierParagraph'>
            Have you ever thought of how far you can take your
             bussiness by buying and selling accross the country?
              Increase your margin by selling accross state nearest to
               you in Nigeria.
            </p>
            <div className='barrierActivitiesContainer'>
              <div className='barrierActivityContainer'>
                 <p className='barrieractivity1a'><CheckboxBrownSVG/></p>
                 <p className='barrieractivity1b'>
                 It's secured and save 
                  </p>
              </div>
              <div className='barrierActivityContainer'>
                 <p className='barrieractivity1a'><CheckboxBrownSVG/></p>
                 <p className='barrieractivity1b'>
                 With iPay escrow as the third party tools
                  to guarantee a successful and secured
                   transaction between buyers and sellers.  
                  </p>
              </div>
              <div className='barrierActivityContainer'>
                 <p className='barrieractivity1a'><CheckboxBrownSVG/></p>
                 <p className='barrieractivity1b'>
                 Leverage on feedback to increase your reach 
                 and turn shoppers to loyal customers. 

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

export default barrier