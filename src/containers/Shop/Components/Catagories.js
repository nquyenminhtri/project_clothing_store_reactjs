function Catagories(){
    return(
        <div className="widget catagory mb-50">
       
        <div className="nav-side-menu">
            <h6 className="mb-0">Catagories</h6>
            <div className="menu-list">
                <ul id="menu-content2" className="menu-content collapse out">
                    
                    <li data-toggle="collapse" data-target="#women2">
                        <a href="#">Woman wear</a>
                        <ul className="sub-menu collapse show" id="women2">
                            <li><a href="#">Midi Dresses</a></li>
                            <li><a href="#">Maxi Dresses</a></li>
                            <li><a href="#">Prom Dresses</a></li>
                            <li><a href="#">Little Black Dresses</a></li>
                            <li><a href="#">Mini Dresses</a></li>
                        </ul>
                    </li>
                   
                    <li data-toggle="collapse" data-target="#man2" className="collapsed">
                        <a href="#">Man Wear</a>
                        <ul className="sub-menu collapse" id="man2">
                            <li><a href="#">Man Dresses</a></li>
                            <li><a href="#">Man Black Dresses</a></li>
                            <li><a href="#">Man Mini Dresses</a></li>
                        </ul>
                    </li>
                   
                    <li data-toggle="collapse" data-target="#kids2" className="collapsed">
                        <a href="#">Children</a>
                        <ul className="sub-menu collapse" id="kids2">
                            <li><a href="#">Children Dresses</a></li>
                            <li><a href="#">Mini Dresses</a></li>
                        </ul>
                    </li>
                    
                    <li data-toggle="collapse" data-target="#bags2" className="collapsed">
                        <a href="#">Bags &amp; Purses</a>
                        <ul className="sub-menu collapse" id="bags2">
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Purses</a></li>
                        </ul>
                    </li>
                   
                    <li data-toggle="collapse" data-target="#eyewear2" className="collapsed">
                        <a href="#">Eyewear</a>
                        <ul className="sub-menu collapse" id="eyewear2">
                            <li><a href="#">Eyewear Style 1</a></li>
                            <li><a href="#">Eyewear Style 2</a></li>
                            <li><a href="#">Eyewear Style 3</a></li>
                        </ul>
                    </li>
                    
                    <li data-toggle="collapse" data-target="#footwear2" className="collapsed">
                        <a href="#">Footwear</a>
                        <ul className="sub-menu collapse" id="footwear2">
                            <li><a href="#">Footwear 1</a></li>
                            <li><a href="#">Footwear 2</a></li>
                            <li><a href="#">Footwear 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Catagories;