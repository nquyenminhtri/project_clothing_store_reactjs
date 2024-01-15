import axios from "../axios";


const API_URL = 'http://127.0.0.1:8000/api';

const getMaterialFromAPI =async()=>{
    return await axios.get(`${API_URL}/material/list`,{withCredentials:true});
}

export default {
    getMaterialFromAPI
}