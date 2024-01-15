import './Cart.scss';
import Header from '../Index/Header/Header';
import Footer from '../Index/Footer/Footer';
import CartAreaStart from './Components/CartAreaStart';
import CartAreaEnd from './Components/CartAreaEnd';
import TopDiscount from '../Index/Section/Components/TopDiscount';


function Cart(){
    return(
        <>
            <div>
            <div id="wrapper">
            <Header/>
            <TopDiscount/>
            <div className="cart_area section_padding_100 clearfix">
            <div className="container">
            <CartAreaStart/>
            <CartAreaEnd/>
            </div>
            </div>
            <Footer/>
            </div>
            </div>
        </>
        
    )
}
export default Cart;
