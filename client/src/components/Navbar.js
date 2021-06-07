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
  // root: {
  //   position: "fixed",
  //   bottom: 10,
  //   right: 20,
  // },
  root: {
    backgroundColor:"rgba(255,255,255,0.5) !important",
    color:"black !important",
  },
  image: {
    width: "50px",
  },
  buttons: {
    flexGrow:1
  }
}));

// function ScrollTop(props) {
//   const { children } = props;
//   const classes = useStyles();
//   const trigger = useScrollTrigger();

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       "#back-to-top-anchor"
//     );

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <Box onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </Box>
//     </Zoom>
//   );
// }

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.root}
    >
      {/* <Container fixed> */}
      <Toolbar id="back-to-top-anchor">
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
