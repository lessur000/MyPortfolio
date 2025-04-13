
import Skills from "../Skills/Skills";
import Contact from "../../Pages/Contact/Contact";
import Footer from "../../Components/layout/Footer";
import Header from "../../Components/layout/Header";
import Introsection from "../../Components/sections/Introsection";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Header />
      <Introsection />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
