
import Header from './Index/Header/Header';
import Section from './Index/Section/Section';
import Main from './Index/Main/Main';
import Footer from './Index/Footer/Footer';
import '../template/css/core-style.css';


function Index(){
    return(
        <>
            <body>
            <div id="wrapper">
                <Header/>
                <Section/>
                <Main/>
                <Footer/>
            </div>
            </body>
        </>
        
    )
}
export default (Index);