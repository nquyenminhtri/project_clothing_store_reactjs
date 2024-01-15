import { useEffect } from "react";
import { setShipping } from "../../../redux/features/shippingSlice";
import { setSelectedShipping } from "../../../redux/features/shippingSlice";
import {setShippingPrice} from "../../../redux/features/shippingSlice";
import { useDispatch,useSelector } from "react-redux";
import shippingService from "../../../services/shippingService";

function ShippingMethod(){
    const dispatch = useDispatch();
    const shippingMethodData = useSelector((state) => state.shipping.shipping); // Data fetched from API
    const selectedShipping = useSelector((state) => state.shipping.selectedShipping);
    console.log('seleceted shipping data : ',shippingMethodData.shippingMethod);
    console.log('seleceted shipping: ',selectedShipping);
    useEffect (()=>{
        shippingService.getShippingMethodFromAPI().then((response)=>{
            console.log('shipping method: ',response);
            dispatch(setShipping(response));
        }).catch((err)=>{
            console.log(err);
        });
    },[]);
    const handleOnchangeShippingMethod = (selectedShippingMethod) => {
        
        // Check if the clicked shipping method is different from the current selected shipping
        if (selectedShippingMethod !== selectedShipping) {
          dispatch(setSelectedShipping(selectedShippingMethod));
          dispatch(setShippingPrice(selectedShippingMethod.cost));
          
        }
      }
    return(
        <>
            <div className="col-12 col-md-6 col-lg-4">
            <div className="shipping-method-area mt-70">
                <div className="cart-page-heading">
                    <h5>Shipping method</h5>
                    <p>Select the one you want</p>
                </div>
                {
                    shippingMethodData.shippingMethod && shippingMethodData.shippingMethod.map((shippingItem, index) => (
                        <div key={index} className="custom-control custom-radio mb-30">
                          <input
                            type="radio"
                            id={`customRadio${index}`}
                            name="customRadio"
                            className="custom-control-input"
                            onChange={() => handleOnchangeShippingMethod(shippingItem)}
                            checked={selectedShipping === shippingItem}
                          />
                          <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor={`customRadio${index}`}>
                            <span>{shippingItem.name}</span>
                            <span>{(shippingItem.cost).toLocaleString('vi-VN')} VNĐ</span>
                          </label>
                        </div>
                      ))
                    
                }
                
            </div>
        </div>
        </>
    )
}
export default ShippingMethod;