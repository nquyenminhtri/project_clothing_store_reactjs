function ButtonCart(){
    return(
        <>
         <div className="cart-footer d-flex mt-30">
                <div className="back-to-shop w-50">
                    <a href="shop-grid-left-sidebar.html">Continue shooping</a>
                </div>
                <div className="update-checkout w-50 text-right">
                    <a href="#">clear cart</a>
                    <a href="#">Update cart</a>
                </div>
            </div>
        </>
    )
}
export default ButtonCart;