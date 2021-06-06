import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/styles";
import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    position:"relative",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/Kitchen-S.JPG"})`,
    
    '&::before':{
      content: ``,
      display:"block",
      position: "absolute",
      backgroundSize: "cover",
      top: "0",
      left: "0",
      width:"100%",
      height:"100%",
      zIndex:1,
      opacity: "0.5",
      
    },
  },
  
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Navbar /> */}
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
