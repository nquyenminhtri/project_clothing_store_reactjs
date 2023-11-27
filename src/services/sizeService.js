import axios from "../axios";
const API_URL = 'http://127.0.0.1:8000/api';


const getSizeFromAPI =async ()=>{
    return await axios.get(`${API_URL}/size/list`,{withCredentials: true });
}
const getProductSizeById = async (id)=>{
    return await axios.get(`${API_URL}/product/size/${id}`,{withCredentials: true });
}
export default {
    getSizeFromAPI,
    getProductSizeById
}