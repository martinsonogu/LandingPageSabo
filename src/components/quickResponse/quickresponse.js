import React from 'react'
import './quickResponse.scss'
import ResPonseImage from '../../assets/images/quickResponse.png'
import { ZigzagSVG } from '../../assets/icons/icons'

const quickresponse = () => {
  return (
    <div className='quickResponseContainer'>
        <div className='quickResponseWrapper'>
            <div className='quickResponseMainContent'>
                <div className='quickResponseMainContentLeft'>
                    <div className='quickResponseMainContentLeftWrapper'>
                    <img src={ResPonseImage} alt='' className='quickResponseImageLeft' />
                    </div>
                </div>
                <div className='quickResponseMainContentRight'>
                    <div className='quickResponseMainContentRightWrapper'>
                    <h2 className='quickResponseMCRHeader'>
                        Get quick response
                    </h2>
                    <p className='quickResponseMCRParagraph'>
                    In case you have any enquiry, suggestions or complaint, be rest assured
                    of getting a quick and swift response from us to solve your issues
                    </p>
                    <p className='quickResponseMCRParagraph2'>
                    Subscribe to our news letter to get the latest update and information about IPAY
                    </p>
                    <div className='quickResponseSearchContainer'>
                        <input className='quickResponseInput'
                        placeholder='Enter your email address'/>
                        <button className='quickResponseButton'>Subscribe</button>
                    </div>
                    </div>
                </div>
            </div>
            <p className='quickResponseTestimonial'>
                Testimonials
            </p>
            <p className='quickResponseTestParagraph'>See what user love and say about us</p>
            <p className='quickResponseZigzag'><ZigzagSVG/></p>
        </div>
    </div>
  )
}

export default quickresponse