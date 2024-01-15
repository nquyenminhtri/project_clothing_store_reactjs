import { useSelector,useDispatch } from "react-redux";
import { selectPromotionDiscount,selectPromotionData } from "../../../redux/features/promotionSlice";
import {selectTotalPriceCart, setTotalPriceCart} from "../../../redux/features/totalPriceSlice";
import { Link } from "react-router-dom";
function CartTotal(){
    const dispatch = useDispatch();
    const a = useSelector(selectTotalPriceCart);
    console.log('total:',a);
    const discountData = useSelector(selectPromotionData);
    const totalPriceCart = useSelector((state)=>state.totalPrice.value);
    const shippingPrice = useSelector((state)=>state.shipping.shippingPrice);
    const discount = useSelector(selectPromotionDiscount);
    console.log('price shipping: ',shippingPrice);
    console.log('tt price: ',totalPriceCart);
    console.log('tt discount: ',discount);
    

    function calculateTotalWithDiscount(totalPriceCart, shippingPrice, discount) {

        // If the status is 0, the discount will be deducted directly
        if(discountData && discountData.success === true && discountData.promotion.status == 0){
                const totalPrice = parseFloat(totalPriceCart) + parseFloat(shippingPrice);
            const discountedPrice = totalPrice - discountData.promotion.discount_percent;
            const formattedPrice = discountedPrice;
            dispatch(setTotalPriceCart(formattedPrice));
            return formattedPrice;
        }

        // If status #= 0 then discount by percentage
        const totalPrice = parseFloat(totalPriceCart) + parseFloat(shippingPrice);
        const discountedPrice = totalPrice - (totalPrice * parseFloat(discount) / 100);
        const formattedPrice = discountedPrice;
        dispatch(setTotalPriceCart(formattedPrice));
        return formattedPrice;
      }
      const totalWithDiscount = calculateTotalWithDiscount(totalPriceCart, shippingPrice, discount);

    return(
        <>
            <div className="col-12 col-lg-4">
            <div className="cart-total-area mt-70">
                <div className="cart-page-heading">
                    <h5>Cart total</h5>
                    <p>Final info</p>
                </div>

                <ul className="cart-total-chart">
                    <li><span>Subtotal</span> <span>{totalPriceCart.toLocaleString('vi-VN')} VNĐ</span></li>
                    <li><span>Shipping</span> <span>{shippingPrice}</span></li>
                    <li><span>Discount</span> <span>{discount}</span></li>
                    <li><span><strong>Total</strong></span> <span><strong>{totalWithDiscount.toLocaleString('vi-VN')} VNĐ</strong></span></li>
                </ul>
                <Link to="/checkout" className="btn karl-checkout-btn">Proceed to checkout</Link>
            </div>
        </div>
        </>
    )
}
export default CartTotal;