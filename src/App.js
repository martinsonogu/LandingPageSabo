
import './App.scss';
import WelcomePage from '../src/components/welcomePage/welcomePage'
import WaitList from '../src/components/waitlist/waitlist'
import Payment from '../src/components/payment/payment'
import EscrowPayment from '../src/components/escrowPayment/escrowPayment'
import BankTransfer from '../src/components/bankTransfer/bankTransfer'
import OpenAccount from './components/openAccount/openAccount'
import Quickresponse from './components/quickResponse/quickresponse'
import Testimonial from './components/testimonial/testimonial'; 
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <WelcomePage/>
      <WaitList/>
      <Payment/>
      <EscrowPayment/>
      <BankTransfer/>
      <OpenAccount/>
      <Quickresponse/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
