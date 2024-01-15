function TopFooter(){
    return(
        <div className="row">
                    
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single_footer_area">
                            <div className="footer-logo">
                                <img src="img/core-img/logo.png" alt="" />
                            </div>
                            <div className="copywrite_text d-flex align-items-center">
                                <p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> &amp; distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="single_footer_area">
                            <ul className="footer_widget_menu">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Faq</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="single_footer_area">
                            <ul className="footer_widget_menu">
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Our Policies</a></li>
                                <li><a href="#">Afiliates</a></li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="col-12 col-lg-5">
                        <div className="single_footer_area">
                            <div className="footer_heading mb-30">
                                <h6>Subscribe to our newsletter</h6>
                            </div>
                            <div className="subscribtion_form">
                                <form action="#" method="post">
                                    <input type="email" name="mail" className="mail" placeholder="Your email here" />
                                    <button type="submit" className="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
    )
}
export default TopFooter;