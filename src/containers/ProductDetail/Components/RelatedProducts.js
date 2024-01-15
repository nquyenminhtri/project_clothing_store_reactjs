import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

function RelatedProducts({ relatedProducts }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleQuickViewClick = (product) => {
      setSelectedProduct(product);

      const modalElement = document.getElementById('quickview');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    };

    const quickViewButtons = document.querySelectorAll('.product-quicview a');

    quickViewButtons.forEach((button, index) => {
      button.addEventListener('click', () => handleQuickViewClick(relatedProducts[index]));
    });

    // Loại bỏ bộ lắng nghe sự kiện khi component bị giải lắp đặt
    return () => {
      quickViewButtons.forEach((button) => {
        button.removeEventListener('click', handleQuickViewClick);
      });
    };
  }, [relatedProducts]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <>
          <div className="modal fade" id="quickview" tabIndex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"></span>
            </button>

            {selectedProduct && (
              <div className="modal-body">
                <div className="quickview_body">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-5">
                        <div className="quickview_pro_img">
                          <img src={selectedProduct.image_path} alt="" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-7">
                        <div className="quickview_pro_des">
                       
                                            <h4 className="title">{selectedProduct.name}</h4>
                                            <div className="top_seller_product_rating mb-15">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <h5 className="price">{selectedProduct.price}<span>{selectedProduct.price}</span></h5>
                                            <p>{selectedProduct.description}</p>
                                            <a href={`/product/${selectedProduct.id}`}>See detail</a>

                                       
                        </div>
                        <form className="cart" method="post">
                                            <div className="quantity">
                                                <span className="qty-minus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>

                                                <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" defaultValue="1" />

                                                <span className="qty-plus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                            </div>
                                            <button type="submit" name="addtocart" value="5" className="cart-submit">Add to cart</button>
                                           
                                            <div className="modal_pro_wishlist">
                                                <a href="wishlist.html" target="_blank"><i className="ti-heart"></i></a>
                                            </div>
                                   
                                            <div className="modal_pro_compare">
                                                <a href="compare.html" target="_blank"><i className="ti-stats-up"></i></a>
                                            </div>
                                        </form>

                                        <div className="share_wf mt-30">
                                            <p>Share With Friend</p>
                                            <div className="_icon">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
<div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_heading text-center">
              <h2>Related Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="you_make_like_slider">
              <Slider {...settings}>
                {relatedProducts &&
                  relatedProducts.map((item, index) => (
                    <div key={index} className="single_gallery_item">
                      <div className="product-img" style={{ width: '100%', height: '500px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <img src={item.image_path} alt="" style={{ height: '100%' }} />
                        <div className="product-quicview">
                        <a href="#" data-target={`#quickview-${item.id}`}>
                        <i className="ti-plus"></i>
                      </a>
                        </div>
                      </div>
                      <div className="product-description" style={{ marginLeft: '10px' }}>
                        <h4 className="product-price">{item.price}</h4>
                        <p>{item.name}</p>
                        <a href="#" className="add-to-cart-btn">
                          ADD TO CART
                        </a>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default RelatedProducts;
