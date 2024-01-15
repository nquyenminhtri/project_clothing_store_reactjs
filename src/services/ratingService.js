import axios from "../axios";


const API_URL = 'http://127.0.0.1:8000/api';

const getRatingProductByProductId =async(id)=>{
    return await axios.get(`${API_URL}/product/rating/${id}`,{withCredentials:true});
}

export default {
    getRatingProductByProductId
}