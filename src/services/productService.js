import axios from '../axios';


const API_URL = 'http://127.0.0.1:8000/api';

const getAllProductCategoryFromAPI =async() =>{
    return await axios.get(`${API_URL}/product-category/list`,{withCredentials: true })
}

const getDetailProductFromAPI = async(id)=>{
    return await axios.get(`${API_URL}/product/${id}`,{ withCredentials: true })
}
const getProductListFromAPI = async () => {
    return await axios.get(`${API_URL}/product/list`,{ withCredentials: true });
};

export default {
    getProductListFromAPI,
    getDetailProductFromAPI,
    getAllProductCategoryFromAPI
};
