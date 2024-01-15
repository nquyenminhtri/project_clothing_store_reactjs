import TopFooter from "./Components/TopFooter";
import BottomFooter from "./Components/BottomFooter";
function Footer(){
    return(
        <footer className="footer_area">
            <div className="container">
                <TopFooter/>
                <div className="line"></div>
                <BottomFooter/>
            </div>
        </footer>
    )
}
export default Footer;