import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    // backgroundColor:"transparent",
  },
  toolbar: theme.mixins.toolbar,
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar} elevation={0}>
        <Container fixed>
          <Toolbar>
            <Typography variant="h4">Score Renovation</Typography>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Pushes content below appbar */}
      <div className={classes.toolbar}></div>
    </>
  );
}
