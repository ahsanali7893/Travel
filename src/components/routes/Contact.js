import AboutImg from "../Assets/2.jpg";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
