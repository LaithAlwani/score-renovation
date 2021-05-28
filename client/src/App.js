import {Container} from "@material-ui/core"
import Navbar from "./components/Navbar/Navbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fixed >
      <h1>Hello, from Score renovations</h1>
      </Container>
    </div>
  );
}

export default App;
