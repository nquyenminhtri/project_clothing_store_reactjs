import axios from "../axios";
const API_URL = 'http://127.0.0.1:8000/api';


const checkPromotionFromAPI =async (code)=>{
    return await axios.post(`${API_URL}/promotion`,{code},{withCredentials: true });
}

export default {
    checkPromotionFromAPI,
    
}