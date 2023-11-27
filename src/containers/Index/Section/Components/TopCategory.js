function TopCategory(){
    return(
        <section class="top_catagory_area d-md-flex clearfix">
        
        <div class="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: 'url(images/bg-5.jpg)' }}>
            <div class="catagory-content">
                <h6>On Accesories</h6>
                <h2>Sale 30%</h2>
                <a href="#" class="btn karl-btn">SHOP NOW</a>
            </div>
        </div>
        
        <div class="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: 'url(images/bg-4.jpg)' }}>
            <div class="catagory-content">
                <h6>in Bags excepting the new collection</h6>
                <h2>Designer bags</h2>
                <a href="#" class="btn karl-btn">SHOP NOW</a>
            </div>
        </div>
    </section>
    )
}
export default TopCategory;