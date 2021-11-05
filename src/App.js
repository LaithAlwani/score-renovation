import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import PageError from "./components/PageError";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/about-us" component={About} />
          <Route path="/gallery" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="*">
            <PageError />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
