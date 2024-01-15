import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setName,
  setGender,
  setAddress,
  setPhone,
  setEmail,
} from '../../../redux/features/customerDataSlice';
import {selectCustomerData} from '../../../redux/features/customerDataSlice';

function BillingAddress() {
  const dispatch = useDispatch();
  const customerData = useSelector(selectCustomerData);
  console.log('check customerData :',customerData);
  // Load data from localStorage when the component mounts
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('customerData'));

    if (localStorageData) {
      // Dispatch actions to set the data from localStorage
      dispatch(setName(localStorageData.name || ''));
      dispatch(setGender(localStorageData.gender || 'male'));
      dispatch(setAddress(localStorageData.address || ''));
      dispatch(setPhone(localStorageData.phone || ''));
      dispatch(setEmail(localStorageData.email || ''));
    }
  }, [dispatch]);
    const handleFullNameChange = (event) => {
      dispatch(setName(event.target.value));
    };
  
    const handleGenderChange = (event) => {
      dispatch(setGender(event.target.value));
    };
  
    const handleAddressChange = (event) => {
      dispatch(setAddress(event.target.value));
    };
  
    const handlePhoneChange = (event) => {
      dispatch(setPhone(event.target.value));
    };
  
    const handleEmailChange = (event) => {
      dispatch(setEmail(event.target.value));
    };
  
    return (
      <div className="col-12 col-md-6">
        <div className="checkout_details_area mt-50 clearfix">
          <div className="cart-page-heading">
            <h5>Billing Address</h5>
            <p>Enter your cupone code</p>
          </div>
  
          <form action="#" method="post">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name">Full Name <span>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={customerData.name}
                  onChange={handleFullNameChange}
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="gender">Gender <span>*</span></label>
                <select
                  className="custom-select d-block w-100"
                  id="gender"
                  value={customerData.gender}
                  onChange={handleGenderChange}
                >
                  <option value="male">Male</option>
                  <option value="girl">Girl</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="address">Address <span>*</span></label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="address"
                  value={customerData.address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="phone">Phone<span>*</span></label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  min="0"
                  value={customerData.phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="col-12 mb-4">
                <label htmlFor="email">Email Address <span>*</span></label>
                <input
                  type="email"
                  className="form-control"
                  id="email_address"
                  value={customerData.email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default BillingAddress;