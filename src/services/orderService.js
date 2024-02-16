import axios from "../axios";


const API_URL = 'http://127.0.0.1:8000/api';

const handelOrderFromAPI =async(requestData)=>{
    return await axios.post(`${API_URL}/sale-invoice`,{requestData},{withCredentials:true});
}
const getOrderByCustomerId = async(id)=>{
    return await axios.get(`${API_URL}/sale-invoice/customer/${id}`,{withCredentials:true});
}
const handleReceivedOrderFromAPI = async(id) =>{
    return await axios.get(`${API_URL}/sale-invoice/received/${id}`,{withCredentials:true});
}
export default {
    handelOrderFromAPI,
    getOrderByCustomerId,
    handleReceivedOrderFromAPI
}