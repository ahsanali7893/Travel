import AboutImg from"../Assets/night.jpg"
import Hero from "../Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutUs from "../AboutUs";
function About (){
    return(
        <>
          <Navbar/>
        <Hero
        cName='hero-mid'
        heroImg={AboutImg}
        title='About'
        btnClass='hide'
        />
        <AboutUs/>
        <Footer/>
        </>
    )
    }
    
    export default About;