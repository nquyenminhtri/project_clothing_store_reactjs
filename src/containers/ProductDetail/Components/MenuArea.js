function MenuArea(){
    return(
        <div className="breadcumb_area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ol className="breadcrumb d-flex align-items-center">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Dresses</a></li>
                        <li className="breadcrumb-item active">Long Dress</li>
                    </ol>
                
                    <a href="#" className="backToHome d-block"><i className="fa fa-angle-double-left"></i> Back to Category</a>
                </div>
            </div>
        </div>
    </div>

    )
}
export default MenuArea;