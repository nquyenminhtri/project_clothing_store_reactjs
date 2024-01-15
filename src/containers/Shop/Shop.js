import './Shop.scss';
import Header from '../Index/Header/Header';
import Footer from '../Index/Footer/Footer';
import Catagories from './Components/Catagories';
import FilterByColor from './Components/FilterByColor';
import FilByPrice from './Components/FilterByPrice';
import FilBySize from './Components/FilterBySize';
import Recommended from './Components/Recommended';
import PageNavigation from './Components/PageNavigation';
import NewArrivals from '../Index/Main/Components/NewArrivals';
function Shop(){
    return(
        <>
        <body>
            <div id="wapper">
                <Header/>
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="shop_sidebar_area">
                                <Catagories/>
                                <FilterByColor/>
                                <FilByPrice/>
                                <FilBySize/>
                                <Recommended/>
                                
                                </div> 
                              
                             </div>
                             <div className="col-12 col-md-8 col-lg-9">
                                <NewArrivals/>
                                <PageNavigation/>
                                </div>
                          </div>
                     </div>
                 </section>
                <Footer/>
            </div>
        </body>
        </>
    )
}
export default (Shop);