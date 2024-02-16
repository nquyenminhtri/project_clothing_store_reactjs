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
const signupCustomerFromAPI = async (name,
  gender,
  phone,
  email,
  address,
  password,) =>{
  return await axios.post(`${API_URL}/customer/sign-up`,{name,
    gender,
    phone,
    email,
    address,
    password,},{withCredentials:true})
}
const resetPasswordByEmail = async(email)=>{
  return await axios.post(`${API_URL}/customer/reset-password`,{email},{withCredentials:true});
}
const changePasswordByEmail = async(email,password)=>{
  return await axios.post(`${API_URL}/customer/change-password`,{email,password},{withCredentials:true});
}
const handleChangePasswordByEmail = async(email,new_password,confirmation_code)=>{
  return await axios.put(`${API_URL}/customer/change-password`,{email,new_password,confirmation_code},{withCredentials:true});
}
const handelUpdateAccount = async(dataToSend)=>{
  return await axios.put(`${API_URL}/customer/update`,dataToSend,{withCredentials:true});
}
export default {
    customerLoginFromAPI,
    customerLogoutFromAPI,
    loginWithFacebook,
    signupCustomerFromAPI,
    resetPasswordByEmail,
    changePasswordByEmail,
    handleChangePasswordByEmail,
    handelUpdateAccount
};
