import React from 'react'
import { AppleSVG, IpayLogoSVG, PlaystoreSVG } from '../../assets/icons/icons'
import './footer.scss'

const footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerContainerWrapper'>
            <div className='footerContents'>
                <div className='footerContent1'>
                    <p className='footerLogo'><IpayLogoSVG/></p>
                    <p className='footerContent1Paragraph'>The best financial and bussiness platform you can ever see</p>
                    <button className='footerGetStarted'>Get started</button>
                </div>
                <div className='footerContent2'>
                    <h3 className='footerContent2Header'>Pages</h3>
                    <p className='footercontent2Links'>Services</p>
                    <p className='footercontent2Links'>Send Money</p>
                    <p className='footercontent2Links'>Plugs</p>
                    <p className='footercontent2Links'>Market</p>
                    <p className='footercontent2Links'>Escrow</p>

                </div>
                <div className='footerContent3'>
                <h3 className='footerContent3Header'>Support</h3>
                    <p className='footercontent3Links'>FAQ</p>
                    <p className='footercontent3Links'>Support center</p>
                    <p className='footercontent3Links'>Security</p>
                    <p className='footercontent3Links'>Testimonials</p>
                    <p className='footercontent3Links'>Contact Us</p>
                </div>
                <div className='footerContent4'>
                    <h3 className='footerContent4Header'>Download App</h3>
                    <p className='apple'><AppleSVG/></p>
                    <p className='playstore'><PlaystoreSVG/></p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default footer