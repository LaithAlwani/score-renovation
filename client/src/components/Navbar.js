import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 10,
    right: 20,
  },
  appbar: {
    
  },
  buttons: {
    flexGrow: 1,
  },
  scroll: {
    scrollBehavior: "smooth",
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </Box>
    </Zoom>
  );
}

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" elevation={0} className={classes.appbar}>
      {/* <Container fixed> */}
        <Toolbar id="back-to-top-anchor">
         
          <Typography variant="h5" className={classes.buttons}>
            SR
          </Typography>
          <Button color="inherit" href="#about" className={classes.scroll}>
            About
          </Button>
          <Button color="inherit" href="#portfolio" className={classes.scroll}>
            Gallery
          </Button>
          <Button color="inherit" href="#contact" className={classes.scroll}>
            Contact
          </Button>
        </Toolbar>

        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      {/* </Container> */}
    </AppBar>
  );
}
