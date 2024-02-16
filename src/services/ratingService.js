import axios from "../axios";


const API_URL = 'http://127.0.0.1:8000/api';

const getRatingProductByProductId =async(id)=>{
    return await axios.get(`${API_URL}/product/rating/${id}`,{withCredentials:true});
}
const handleSendingCustomerReviewsToAPI = async( customer_id,product_id,star,comment)=>{
    return await axios.post(`${API_URL}/product/rating`,{customer_id,product_id,star,comment},{withCredentials:true});
}
export default {
    getRatingProductByProductId,
    handleSendingCustomerReviewsToAPI
}