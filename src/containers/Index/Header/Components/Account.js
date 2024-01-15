import React, { useState, useEffect } from 'react';
import './Account.css';

function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedCustomerData = localStorage.getItem('customerData');
    console.log('check local data: ',storedCustomerData);
    if (storedIsLoggedIn && storedCustomerData) {
      setIsLoggedIn(true);
      setCustomerData(JSON.parse(storedCustomerData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('customerData');
    setIsLoggedIn(false);
    setCustomerData(null);
    window.location.href = '/login';
  };

  return (
    <>
      <div className="fixed-corner">
        {isLoggedIn ? (
          <>
          {customerData && (
            <a href="#" id="header-account-btn" >
                <div className="account-img"><img className='account-img' src={customerData.image_path} alt="Avatar" /></div>
                <div className="account-name">{customerData.name}</div>
              
            </a>
            )}
            {customerData && (
              <div className="account-info">
                <ul>
                  <li><a href="/profile">My Profile</a></li>
                  <li><a href="/cart">My Orders</a></li>
                  <li><a href="/login" onClick={handleLogout}>Logout</a></li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <a href="/login" id="header-account-btn">
            <div className="account-img"></div>
            <div className="account-name">Login</div>
          </a>
        )}
      </div>
    </>
  );
}

export default Account;
