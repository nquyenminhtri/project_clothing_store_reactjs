import axios from "../axios";


const API_URL = 'http://127.0.0.1:8000/api';

const handelOrderFromAPI =async(requestData)=>{
    return await axios.post(`${API_URL}/sale-invoice`,{requestData},{withCredentials:true});
}

export default {
    handelOrderFromAPI
}