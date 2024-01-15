import './Checkout.scss';
import Header from '../Index/Header/Header';
import Footer from '../Index/Footer/Footer';
import YourOrder from './Components/YourOrder';
import BillingAddress from './Components/BillingAddress';

function Checkout(){
    return(
        <>
            
            <div id="wrapper">
            <Header/>

            <div className="checkout_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <BillingAddress/>
                        <YourOrder/>
                    </div>
                </div>
            </div>

            <Footer/>
            </div>
            
        </>
    )

}
export default (Checkout);
