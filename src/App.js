import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";



function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      
    </Router>
  );
}

export default App;