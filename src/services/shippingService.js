import axios from "../axios";
const API_URL = 'http://127.0.0.1:8000/api';


const getShippingMethodFromAPI =async ()=>{
    return await axios.get(`${API_URL}/shipping`,{withCredentials: true });
}

export default {
    getShippingMethodFromAPI,
    
}