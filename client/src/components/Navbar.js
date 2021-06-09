import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"rgba(255,255,255,0.5) !important",
    color:"black !important",
  },
  toolbar:{
    "@media (min-width:768px)":{
      width:"70%",
      margin:"0 auto"
    }
  },
  image: {
    width: "50px",
  },
  buttons: {
    flexGrow:1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.root}
    >
      {/* <Container fixed> */}
      <Toolbar id="back-to-top-anchor" className={classes.toolbar}>
        <Box className={classes.buttons}>
          <img
            src={
              process.env.PUBLIC_URL + "/images/score-renovation-black_logo.png"
            }
            alt="logo"
            className={classes.image}
          />
        </Box>

        <Button color="inherit" href="#about" >
          About
        </Button>
        <Button color="inherit" href="#portfolio" >
          Gallery
        </Button>
        <Button color="inherit" href="#contact" >
          Contact
        </Button>
      </Toolbar>

      {/* <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
      {/* </Container> */}
    </AppBar>
  );
}
