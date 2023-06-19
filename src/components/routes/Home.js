import Destination from "../Destination";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Trip from "../Trip";

function Home (){
    return(
        
        <>
        <Navbar/>
        <Hero
        cName='hero'
        heroImg='https://images.unsplash.com/photo-1627339962969-8ddab7e6ebfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80'
        title='Your Journey Your Story'
        text='Choose Your Favourite Destination.'
        buttonText='Travel Plan'
        url='/'
        btnClass='show'
        />
        <Destination/>
        
        <Trip/>

        <Footer/>

        </>
    )
    }
    
    export default Home;