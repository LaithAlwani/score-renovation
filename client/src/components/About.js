import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    backgroundColor:"rgba(255,255,255,0.5)"
  },
  titleContainer: {
    height:"100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign:"center"
  },
}));

function About() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.root} id="about">
        <div className={classes.titleContainer}>
          <div className={classes.title}>
            <Typography variant="h2">Score Renovations</Typography>
            <Typography variant="subtitle1" display="block">
              Renovation made easy!
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
