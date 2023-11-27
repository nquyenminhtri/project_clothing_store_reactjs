import TopFooter from "./Components/TopFooter";
import BottomFooter from "./Components/BottomFooter";
function Footer(){
    return(
        <footer class="footer_area">
            <div class="container">
                <TopFooter/>
                <div class="line"></div>
                <BottomFooter/>
            </div>
        </footer>
    )
}
export default Footer;