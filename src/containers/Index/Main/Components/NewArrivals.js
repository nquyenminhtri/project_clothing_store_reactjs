
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
function NewArrivals(){
    useEffect(() => {
        // Thêm event listener để hiển thị modal khi nhấp vào nút "Xem Nhanh"
        const quickViewButton = document.querySelectorAll('.product-quicview a');
        quickViewButton.forEach((button) => {
          button.addEventListener('click', () => {
            const modal = new bootstrap.Modal(document.getElementById('quickview'));
            modal.show();
          });
        });
    
        // Loại bỏ event listener khi component unmount
        return () => {
          quickViewButton.forEach((button) => {
            button.removeEventListener('click', () => {
              const modal = new bootstrap.Modal(document.getElementById('quickview'));
              modal.show();
            });
          });
        };
      }, []);
    
    return (
        <>
        <div class="modal fade" id="quickview" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                    <div class="modal-body">
                        <div class="quickview_body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-5">
                                        <div class="quickview_pro_img">
                                            <img src="img/product-img/product-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-7">
                                        <div class="quickview_pro_des">
                                            <h4 class="title">Boutique Silk Dress</h4>
                                            <div class="top_seller_product_rating mb-15">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <h5 class="price">$120.99 <span>$130</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                            <a href="#">View Full Product Details</a>
                                        </div>
                                    
                                        <form class="cart" method="post">
                                            <div class="quantity">
                                                <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>

                                                <input type="number" class="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" />

                                                <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                            </div>
                                            <button type="submit" name="addtocart" value="5" class="cart-submit">Add to cart</button>
                                           
                                            <div class="modal_pro_wishlist">
                                                <a href="wishlist.html" target="_blank"><i class="ti-heart"></i></a>
                                            </div>
                                   
                                            <div class="modal_pro_compare">
                                                <a href="compare.html" target="_blank"><i class="ti-stats-up"></i></a>
                                            </div>
                                        </form>

                                        <div class="share_wf mt-30">
                                            <p>Share With Friend</p>
                                            <div class="_icon">
                                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                                                <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
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
        <section class="new_arrivals_area section_padding_100_0 clearfix">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section_heading text-center">
                        <h2>New Arrivals</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="karl-projects-menu mb-100">
            <div class="text-center portfolio-menu">
                <button class="btn active" data-filter="*">ALL</button>
                <button class="btn" data-filter=".women">WOMAN</button>
                <button class="btn" data-filter=".man">MAN</button>
                <button class="btn" data-filter=".access">ACCESSORIES</button>
                <button class="btn" data-filter=".shoes">shoes</button>
                <button class="btn" data-filter=".kids">KIDS</button>
            </div>
        </div>

        <div class="container">
            <div class="row karl-new-arrivals">

                
                <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                    {/* <!-- Product Image --> */}
                    <div class="product-img">
                        <img src="images/product-1.jpg" alt="" />
                        <div class="product-quicview">
                            <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                        </div>
                    </div>
                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <h4 class="product-price">$39.90</h4>
                        <p>Jeans midi cocktail dress</p>
                        {/* <!-- Add to Cart --> */}
                        <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                    </div>
                </div>

                {/* <!-- Single gallery Item Start --> */}
                <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
                    {/* <!-- Product Image --> */}
                    <div class="product-img">
                        <img src="images/product-3.jpg" alt="" />
                        <div class="product-quicview">
                            <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                        </div>
                    </div>
                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <h4 class="product-price">$39.90</h4>
                        <p>Jeans midi cocktail dress</p>
                        {/* <!-- Add to Cart --> */}
                        <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                    </div>
                </div>

                {/* <!-- Single gallery Item Start --> */}
                <div class="col-12 col-sm-6 col-md-4 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
                    {/* <!-- Product Image --> */}
                    <div class="product-img">
                        <img src="images/product-3.jpg" alt="" />
                        <div class="product-quicview">
                            <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                        </div>
                    </div>
                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <h4 class="product-price">$39.90</h4>
                        <p>Jeans midi cocktail dress</p>
                        {/* <!-- Add to Cart --> */}
                        <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                    </div>
                </div>

                {/* <!-- Single gallery Item Start --> */}
                <div class="col-12 col-sm-6 col-md-4 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
                    {/* <!-- Product Image --> */}
                    <div class="product-img">
                        <img src="images/product-3.jpg" alt=""/>
                        <div class="product-quicview">
                            <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                        </div>
                    </div>
                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <h4 class="product-price">$39.90</h4>
                        <p>Jeans midi cocktail dress</p>
                        {/* <!-- Add to Cart --> */}
                        <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                    </div>
                </div>

                {/* <!-- Single gallery Item Start --> */}
                <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
                    {/* <!-- Product Image --> */}
                    <div class="product-img">
                        <img src="images/product-3.jpg" alt="" />
                        <div class="product-quicview">
                            <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                        </div>
                    </div>
                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <h4 class="product-price">$39.90</h4>
                        <p>Jeans midi cocktail dress</p>
                        {/* <!-- Add to Cart --> */}
                        <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                    </div>
                </div>

                {/* <!-- Single gallery Item --> */}
                <div class="col-12 col-sm-6 col-md-4 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
                    {/* <!-- Product Image --> */}
                    <div class="product-img">
                        <img src="images/product-3.jpg" alt="" />
                        <div class="product-quicview">
                            <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                        </div>
                    </div>
                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <h4 class="product-price">$39.90</h4>
                        <p>Jeans midi cocktail dress</p>
                        {/* <!-- Add to Cart --> */}
                        <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
       
    )
}
export default NewArrivals;