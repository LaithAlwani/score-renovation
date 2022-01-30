import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PageError from "./pages/PageError";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/gallery" component={Gallery} />
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
