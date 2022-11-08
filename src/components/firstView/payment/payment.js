import React from 'react'
import './payment.scss'
import {SendSVG, ZigzagSVG, PayBillSVG, BanktransferSVG, SubscribeSVG} from '../../../assets/icons/icons'
import Phone from '../../../assets/images/escrowPayment.png'
import HandOfGod from '../../../assets/images/HandOfGod.png'

const payment = () => {
  return (
    <div className='paymentContainer'>
        <div className='paymentContainerWrapper'>
            <h1 className='paymentTitle'>Payment</h1>
            <p className='paymentIntro'>
            Save your money , widraw and transfer accross
             all platforms by the fasttest means possible and
            make money by reffering people to the platform.
            </p>
            <p className='zigzag'>
                <ZigzagSVG/>
            </p>
            <div className='mainPaymentContent'>
                <div className='paymentContentLeft'>
                    <div className='paymentContentLeftWrapper'>
                        <img src={Phone} alt='' className='phoneImage' />
                    </div>
                </div>
                <div className='paymentContentRight'>
                    <div className='paymentContentRightWrapper'>
                        <h2 className='paymentContentRightHeader'>Pay with ease</h2>
                        <p className='paymentContentRightParagraph'>Send and receive money with @iPaytags, phone numbers and emails. It’s free,
                             secured and instantly. </p>
                        <div className='paymentContentRightTwo'>
                            <div className='contentRightTwoContainer'>
                                <p className='CRTwoP1'><SendSVG/></p>
                                <p className='CRTwoP2'>Send money with iPay tag</p>
                            </div>
                            <div className='contentRightTwoContainer'>
                                <p className='CRTwoP1'><BanktransferSVG/></p>
                                <p className='CRTwoP2'>Bank transfers with Ease</p>
                            </div>
                            <div className='contentRightTwoContainer'>
                                <p className='CRTwoP1'><PayBillSVG/></p>
                                <p className='CRTwoP2'>Pay Bills in one place </p>
                            </div>
                            <div className='contentRightTwoContainer'>
                                <p className='CRTwoP1'><SubscribeSVG/></p>
                                <p className='CRTwoP2'>Subscribe for your premium tvs, pay for<br/> electricity bill, airtime, and 
                                data plans 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className='handimgContainer'>
                <img src={HandOfGod} alt='' className='handOfGod' />
            </div>
            <div className='buttonContainer'>
                <div className='buttonContainerWrapper'>
                    <p className='button1'>Payment</p>
                    <p className='button'>Market</p>
                    <p className='button'>Coming Soon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default payment