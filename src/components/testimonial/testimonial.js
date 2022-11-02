import React from 'react'
import './testimonial.scss'
import Left from '../../assets/images/Left.png'
import Swiper from '../testimonial/swiper/swiper'

const testimonial = () => {
  return (
    <div className='testimonialContainer'>
        <div className='testimonialTop'>
            <div className='testimonialTopWrapper'>
                <div className='TTMainContent'>
                    <div className='TTMCLeftContainer'>
                        <h2 className='TTMCLCHeader'>
                            What are you saying
                        </h2>
                        <p className='TTMCLCParagraph'>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Tristique leo, enim et,
                        in ac. Dolor ut ultrices et mauris, maecenas senectus donec.
                        </p>
                    </div>
                    <div className='TTMCRightContainer'>
                    <Swiper/>
                    </div>
                </div>
            </div>

        </div>
        <div className='testimonialBottom'>
            <div className='testimonialBottomWrapper'>
                <img className='TBImageLeft' src={Left} alt=''/>
                <img className='TBImageRight' src={Left} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default testimonial