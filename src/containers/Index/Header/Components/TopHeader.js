import React, { useState } from 'react';
import './TopHeader.css'; // Import file CSS để quản lý hiển thị và ẩn
import Account from './Account';
import { Link } from 'react-router-dom';

function TopHeader() {
  const [showCartList, setShowCartList] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const handleCartButtonClick = () => {
    // Khi người dùng click vào nút Your Bag
    // Chuyển đổi trạng thái showCartList
    setShowCartList(!showCartList);
  };

  return (
    <div className="top_header_area">
      
      <div className="container h-100">
      
        <div className="row h-100 align-items-center justify-content-end">
          <div className="col-12 col-lg-7">
            <div className="top_single_area d-flex align-items-center">
            <Account/>
              <div className="top_logo">
                <a href="#"><img src="logo.png" alt="" /></a>
              </div>
              <div className="header-cart-menu d-flex align-items-center ml-auto">
              
                <div className="cart">
                  <a href="#" id="header-cart-btn" onClick={handleCartButtonClick}>
                    <span className="cart_quantity">2</span> <i className="ti-bag"></i> Your Bag $20
                  </a>
                  <ul className={`cart-list ${showCartList ? 'show' : 'hide'}`}>
                    <li>
                      <a href="#" className="image"><img src="img/product-img/product-10.jpg" className="cart-thumb" alt="" /></a>
                      <div className="cart-item-desc">
                        <h6><a href="#">Women's Fashion</a></h6>
                        <p>1x - <span className="price">$10</span></p>
                      </div>
                      <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                    </li>
                    <li>
                      <a href="#" className="image"><img src="img/product-img/product-11.jpg" className="cart-thumb" alt="" /></a>
                      <div className="cart-item-desc">
                        <h6><a href="#">Women's Fashion</a></h6>
                        <p>1x - <span className="price">$10</span></p>
                      </div>
                      <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                    </li>
                    <li className="total">
                      <span className="pull-right">Total: $20.00</span>
                      <Link to="/cart" className="btn btn-sm btn-cart">Cart</Link>
                      <Link to="/checkout" className="btn btn-sm btn-checkout">Checkout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;