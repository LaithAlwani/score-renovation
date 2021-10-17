import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      
    </Router>
  );
}

export default App;