import React from 'react'
import './market.scss'
import {CheckboxBrownSVG, ZigzagSVG} from '../../../assets/icons/icons'
import Phone from '../../../assets/images/PhoneMarketSection.png'
import HandOfGod from '../../../assets/images/HandOfGod.png'

const payment = () => {
  return (
    <div className='paymentContainer'>
        <div className='paymentContainerWrapper'>
            <h1 className='paymentTitle'>Market (shopping is sweet)</h1>
            <p className='paymentIntro'>
            When you get value for your money shopping is sweeter. With the iPay app you can 
            start selling and buying goods and services today. It's easy, instant and secured.
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
                <div className='marketContentRight'>
                    <div className='marketContentRightWrapper'>
                        <h2 className='marketContentRightHeader'>Buy and sell from home</h2>
                        <p className='marketContentRightParagraph'>
                        Just like breakfast on the bed is the best treat, buy, sell at home is the best way
                        to spend and make money. It's free, fast, secured with our escrow tools. 
                             </p>
                        <div className='paymentContentRightTwo'>
                            <div className='contentRightTwoContainer'>
                                <p className='CRTwoP1'><CheckboxBrownSVG/></p>
                                <p className='CRTwoP2'>
                                Buying and Selling from the next door neighbour <br/>
                                on IPAY in a more secured way.
                                </p>
                            </div>
                            <div className='contentRightTwoContainer'>
                                <p className='CRTwoP1'><CheckboxBrownSVG/></p>
                                <p className='CRTwoP2'>
                                    Free adverts for your goods and services.<br/>
                                    Free marketing tools to help you grow your<br/>
                                    business. 

                                </p>
                            </div>
                            <div className='contentRightTwoContainer'>
                                <p className='CRTwoP1'><CheckboxBrownSVG/></p>
                                <p className='CRTwoP2'>
                                You can buy and sell anything on the iPay<br/>
                                 app. From phones, designers clothes, every<br/>
                                goods and services 
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
                    <p className='button'>Payment</p>
                    <p className='button1'>Market</p>
                    <p className='button'>Coming Soon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default payment