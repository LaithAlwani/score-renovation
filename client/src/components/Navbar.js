import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from '@material-ui/core/Box';
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom:10,
    right:20
  },
  appbar: {
    flexGrow: 1,
  },
  menuButton: {
    
  },
  buttons: {
    flexGrow: 1,
  },
  scroll: {
    scrollBehavior: "smooth"
  }
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

export default function BackToTop() {
  const classes = useStyles();
  return (
    <div className={classes.appbar}>
      <AppBar elevation={0} position="static" color="inherit" >
        <Container fixed>

        <Toolbar id="back-to-top-anchor">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
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
        </Container>
      </AppBar>
  
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
