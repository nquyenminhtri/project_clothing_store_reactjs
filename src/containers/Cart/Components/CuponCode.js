
import { useDispatch, useSelector } from "react-redux";
import { setPromotionCode,setPromotionData,setDiscount } from "../../../redux/features/promotionSlice";
import promotionService from "../../../services/promotionService";
function CuponCode(){
    const dispatch = useDispatch();

    const code = useSelector((state)=>state.promotion.code);
    console.log('code promotion: ',code);
    const handleCheckDiscountCode =() =>{
        promotionService.checkPromotionFromAPI(code).then((response)=>{
            console.log('check promotion: ',response);
            dispatch(setPromotionData(response));
            if(response.success ===true){
                dispatch(setDiscount(response.promotion.discount_percent));
            }else{
                dispatch(setDiscount(0));
            }
            
        }).catch((err)=>{
            console.log(err);
        });
    }
    const handleInputChange = (e)=>{
        dispatch(setPromotionCode(e.target.value));
       
    }
    return(
        <>
            <div className="col-12 col-md-6 col-lg-4">
            <div className="coupon-code-area mt-70">
                <div className="cart-page-heading">
                    <h5>Cupon code</h5>
                    <p>Enter your cupone code</p>
                </div>
                <form action="#" onSubmit={(e) => { e.preventDefault(); handleCheckDiscountCode(); }}>
                    <input type="search" name="search" value={code} onChange={handleInputChange} placeholder="#569ab15"/>
                    <button type="submit">Apply</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default CuponCode;