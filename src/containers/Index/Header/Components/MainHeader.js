
import React, { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
function MainHeader() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleDocumentClick = (e) => {
      // Kiểm tra xem có phải là dropdown hoặc nút mở dropdown hay không
      const isDropdownElement = e.target.matches('.dropdown-toggle') || e.target.closest('.dropdown-menu');
      const isToggleElement = e.target.matches('.navbar-toggler');
  
      // Nếu không phải là dropdown hoặc nút mở dropdown, đóng dropdown
      if (!isDropdownElement && !isToggleElement) {
        setDropdownOpen(false);
      }
    };
  
    useEffect(() => {
      // Thêm sự kiện click cho cả body hoặc document
      document.addEventListener('click', handleDocumentClick);
  
      // Cleanup sự kiện khi component unmount
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);
    return (
        <div class="main_header_area">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-12 d-md-flex justify-content-between">
                            
                            <div class="header-social-area">
                                <a href="#"><span class="karl-level">Share</span> <i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                            </div>
                        
                            <div class="main-menu-area">
                                <nav class="navbar navbar-expand-lg align-items-start">

                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="ti-menu"></i></span></button>

                                    <div class="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                        <ul class="navbar-nav animated" id="nav">
                                            <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                                            <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="karlDropdown"
                        role="button"
                        onClick={handleDropdownClick}
                      >
                        Pages
                      </a>
                      <div
                        className={`dropdown-menu ${
                          isDropdownOpen ? 'show' : ''
                        }`}
                        aria-labelledby="karlDropdown"
                      >
                        <a className="dropdown-item" href="index.html">
                          Home
                        </a>
                        <a className="dropdown-item" href="shop.html">
                          Shop
                        </a>
                        <a className="dropdown-item" href="product-details.html">
                          Product Details
                        </a>
                        <a className="dropdown-item" href="cart.html">
                          Cart
                        </a>
                        <a className="dropdown-item" href="checkout.html">
                          Checkout
                        </a>
                      </div>
                    </li>
                                            <li class="nav-item"><a class="nav-link" href="#">Dresses</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#"> Shoes</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            
                            <div class="help-line">
                                <a href="tel:+84867646120"><i class="ti-headphone-alt"></i> 0867646120</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MainHeader;
