function Offer(){
    return(
        <section className="offer_area height-700 section_padding_100 bg-img" style={{ backgroundImage: 'url(images/bg-4.jpg)' }}>
            <div className="container h-100">
                <div className="row h-100 align-items-end justify-content-end">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="offer-content-area wow fadeInUp" data-wow-delay="1s">
                            <h2>White t-shirt <span className="karl-level">Hot</span></h2>
                            <p>* Free shipping until 25 Dec 2017</p>
                            <div className="offer-product-price">
                                <h3><span className="regular-price">$25.90</span> $15.90</h3>
                            </div>
                            <a href="#" className="btn karl-btn mt-30">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Offer;
