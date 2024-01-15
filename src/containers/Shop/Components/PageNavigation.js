function PageNavigation(){
    return(
        <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
        <nav aria-label="Page navigation">
            <ul className="pagination pagination-sm">
                <li className="page-item active"><a className="page-link" href="#">01</a></li>
                <li className="page-item"><a className="page-link" href="#">02</a></li>
                <li className="page-item"><a className="page-link" href="#">03</a></li>
            </ul>
        </nav>
    </div>
    )
}
export default PageNavigation;