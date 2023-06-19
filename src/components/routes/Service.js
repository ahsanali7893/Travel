import AboutImg from"../Assets/night.jpg"
import Hero from "../Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Trip from "../Trip";
function Service (){
    return(
        <>
               <Navbar/>
        <Hero
        cName='hero-mid'
        heroImg={AboutImg}
        title='Service'
        btnClass='hide'
        />
        <Trip/>
        <Footer/>
        </>
    )
    }
    
    export default Service;