import { useDispatch,useSelector } from "react-redux";
import {selectPromotionDiscount} from '../../../redux/features/promotionSlice';
import {selectShippingPrice} from '../../../redux/features/shippingSlice';
import {selectTotalPriceCart} from '../../../redux/features/totalPriceSlice';
import orderService from "../../../services/orderService";
import {selectCustomerData} from '../../../redux/features/customerDataSlice';
import { setSelectedPayment } from '../../../redux/features/paymentMethodSlice';
import {selectedShipping} from '../../../redux/features/shippingSlice';
import PayMethod from "./PayMethod"; 

function YourOrder(){
    const localStorageData = JSON.parse(localStorage.getItem('cart'));
    const discount = useSelector(selectPromotionDiscount);
    const shippingPrice = useSelector(selectShippingPrice);
    const totalPriceCart = useSelector(selectTotalPriceCart);
    console.log('to :',totalPriceCart);
    const customerData = useSelector(selectCustomerData);
    const shippingMethod = useSelector(selectedShipping);
    const selectedPayment = useSelector((state) => state.paymentMethod.selectedPayment);
    console.log('shippingPrice :',shippingPrice);
    console.log('discount :',discount);
    console.log('LocalStorage Data:', localStorageData);

    

    const handleOnClickOrder = () =>{
        const requestData = {
            customerData:customerData,
            cart: localStorageData,
            paymentMethod:selectedPayment,
            discount: discount,
            shippingPrice: shippingPrice,
            shippingMethod:shippingMethod,
            totalPriceCart: totalPriceCart,
          };
          console.log('check request data:',requestData);
        orderService.handelOrderFromAPI(requestData).then((response)=>{
            console.log('response order:',response);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                        <div className="order-details-confirmation">

                            <div className="cart-page-heading">
                                <h5>Your Order</h5>
                                <p>The Details</p>
                            </div>

                           
                                        <ul className="order-details-form mb-4">
                                            <li><span>Product</span> <span>Total</span></li>
                                            {localStorageData && localStorageData.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <li>
                                                    <span>{item.product.name}</span>
                                                    <span>{item.quantity}</span> x 
                                                    <span>{parseFloat(item.product.price).toLocaleString('vi-VN')} VNĐ</span>
                                                    <span>{(parseFloat(item.quantity)* parseFloat(item.product.price)).toLocaleString('vi-VN')} VNĐ</span>
                                                </li>
                                            </div>
                                        )
                                    })}
                                            <li><span>Shipping</span> <span>{shippingPrice}</span></li>
                                            <li><span>Discount</span> <span>{discount}</span></li>
                                            <li><span>Total</span> <span>{totalPriceCart}</span></li>
                                        </ul>
                          
                            
                            <PayMethod/>
                            <span onClick={handleOnClickOrder} className="btn karl-checkout-btn">Place Order</span>
                        </div>
                    </div>
    )
}
export default YourOrder;