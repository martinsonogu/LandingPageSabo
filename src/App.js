
import './App.scss';
import WelcomePage from '../src/components/welcomePage/welcomePage'
import WaitList from '../src/components/waitlist/waitlist'
import Payment from '../src/components/firstView/payment/payment'
import EscrowPayment from '../src/components/firstView/escrowPayment/escrowPayment'
import BankTransfer from './components/firstView/bankTransfer/bankTransfer'
import OpenAccount from './components/firstView/openAccount/openAccount'
import Quickresponse from './components/quickResponse/quickresponse'
import Testimonial from './components/testimonial/testimonial'; 
import Footer from './components/footer/footer';
import Market from './components/MarketTransferFeature/Market/market'
import Barrier from './components/MarketTransferFeature/Barrier/barrier';
import Services from './components/MarketTransferFeature/Services/services'
import Explore from './components/MarketTransferFeature/Explore/explore';
import CsFeatures from './components/comingSoon/csFeatures/csFeatures';
import BusinessTools from './components/comingSoon/BusinessTools/businessTools';
import Giveaway from './components/comingSoon/TrendingGiveaway/giveaway';
import POS from './components/comingSoon/POSBusiness/POS';

function App() {
  return (
    <div className="App">
     
       
      <WelcomePage/>
      
      {/* <WaitList/>
      <Payment/>
      <EscrowPayment/>
      <BankTransfer/>
      <OpenAccount/> */}
      
      {/* <Market/>
      <Barrier/>
      <Services/>
      <Explore/> */}
      
       {/* <CsFeatures/>
       <BusinessTools/>
       <Giveaway/>
       <POS/> */}
      <Quickresponse/>
      <Testimonial/>
      <Footer/> 
    </div>
  );
}

export default App;
