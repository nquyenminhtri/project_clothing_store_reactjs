import CuponCode from "./CuponCode";
import ShippingMethod from "./ShippingMethod";
import CartTotal from "./CartTotal";
function CartAreaEnd(){
    return(
        <div className="row">
            <CuponCode/>
            <ShippingMethod/>
            <CartTotal/>
        </div>
    )
}
export default CartAreaEnd;