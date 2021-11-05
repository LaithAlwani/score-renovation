import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Layout>
          <Route path="/aboutus" component={About} />
          <Route path="/gallery" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
