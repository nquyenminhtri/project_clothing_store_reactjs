import axios from '../axios';


const API_URL = 'http://127.0.0.1:8000/api';

const customerLoginFromAPI = async (phone, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/customer/login`,
        { phone, password },
        { withCredentials: true }
      );
      
      return response;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  };
const customerLogoutFromAPI =async() =>{
    return await axios.post(`${API_URL}/customer/logout`,{withCredentials: true })
}
const loginWithFacebook = async (accessToken) => {
    try {
        const response = await axios.post(`${API_URL}/customer/login/facebook`, { accessToken });
        console.log(response.data.access_token);
    } catch (error) {
        console.error('Login with Facebook failed:', error);
    }
};
export default {
    customerLoginFromAPI,
    customerLogoutFromAPI,
    loginWithFacebook
};
