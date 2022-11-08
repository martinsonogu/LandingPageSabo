import React from 'react'
import './explore.scss'
import { CheckboxBrownSVG } from '../../../assets/icons/icons'
import Phone from '../../../assets/images/explore.png'

const explore = () => {
  return (
    <div className='exploreContainer'>
        <div className='exploreContainerWrapper'>
        <div className='exploreMainContent'>
          <div className='exploreMainContentLeft'>
            <h2 className='exploreTitle'>Explore the city for<br/> best deals</h2>
            <p className='exploreParagraph'> 
                Comb every corner of your cities for the best deals
                before you spend your money. You never know what
                your city has to offer until you explore your options. 
            </p>
            <div className='exploreActivitiesContainer'>
              <div className='exploreActivityContainer'>
                 <p className='exploreAactivity1a'><CheckboxBrownSVG/></p>
                 <p className='exploreAactivity1b'>
                 Can't find what you want nearby ? Explore every corners of kilometer on IPAY APP.
                  </p>
              </div>
              <div className='exploreActivityContainer'>
                 <p className='exploreAactivity1a'><CheckboxBrownSVG/></p>
                 <p className='exploreAactivity1b'>
                 Threckable deals await you to cut down on logistics payment.  
                  </p>
              </div>
              <div className='exploreActivityContainer'>
                 <p className='exploreAactivity1a'><CheckboxBrownSVG/></p>
                 <p className='exploreAactivity1b'>
                    Current account to run your business and carry out huge transactions. 
                  </p>
              </div>

            </div>
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

export default explore