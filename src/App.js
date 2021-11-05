import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Layout>
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </Switch>
      {/* <Hero />
      <About />
      <Portfolio />
      <Contact /> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
