
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
        <div className="main_header_area">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 d-md-flex justify-content-between">
                            
                            <div className="header-social-area">
                                <a href="#"><span className="karl-level">Share</span> <i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                            </div>
                        
                            <div className="main-menu-area">
                                <nav className="navbar navbar-expand-lg align-items-start">

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu"></i></span></button>

                                    <div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                        <ul className="navbar-nav animated" id="nav">
                                            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
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
                        <a className="dropdown-item" href="\#">
                          Home
                        </a>
                        <a className="dropdown-item" href="\shop">
                          Shop
                        </a>
                        <a className="dropdown-item" href="\ProductDetail">
                          Product Details
                        </a>
                        <a className="dropdown-item" href="\cart">
                          Cart
                        </a>
                        <a className="dropdown-item" href="\checkout">
                          Checkout
                        </a>
                      </div>
                    </li>
                                            <li className="nav-item"><a className="nav-link" href="#">Dresses</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#"> Shoes</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            
                            <div className="help-line">
                                <a href="tel:+84867646120"><i className="ti-headphone-alt"></i> 0867646120</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MainHeader;
