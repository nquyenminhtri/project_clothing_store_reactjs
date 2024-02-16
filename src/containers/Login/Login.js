import React, { useState } from 'react';
import './Login.css';
import customerService from '../../services/customerService';
import { useDispatch } from 'react-redux';
import {
    setId,
    setName,
    setGender,
    setAddress,
    setPhone,
    setEmail,
    selectCustomerData,
} from '../../redux/features/customerDataSlice';
function Login() {
  const [phone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await customerService.customerLoginFromAPI(phone, password);
      localStorage.setItem('customerData', JSON.stringify(response.customerData));
      //set dữ liệu vào redux

     
      dispatch(setId(response.customerData.id));
      dispatch(setName(response.customerData.name));
      dispatch(setGender(response.customerData.gender));
      dispatch(setAddress(response.customerData.address));
      dispatch(setPhone(response.customerData.phone));
      dispatch(setEmail(response.customerData.email));
      localStorage.setItem('isLoggedIn', true);
      window.location.href = '/';
    } catch (error) {
      console.error('Login Error:', error);
    }
  };
  return (
    <>
      <div className="bg-gradient-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form className="user" onSubmit={handleLogin}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter phone number..."
                              value={phone}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                                         <div className="custom-control custom-checkbox small">
                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                             <label className="custom-control-label" htmlFor="customCheck">Remember
                                                Me</label>
                                         </div>
                                     </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                          <a href="index.html" className="btn btn-google btn-user btn-block">
                                         <i className="fab fa-google fa-fw"></i> Login with Google
                                     </a>
                        </form>
                        
                        <hr/>
                                <div className="text-center">
                                    <a className="small" href="reset-password">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="sign-up">Create an Account!</a>
                                </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
