import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({
  root: {
    
    height: "100vh",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root} id="about" >
      

      <Typography variant="h3" >

      Hi from About
      </Typography>
      
    </Container>
    
  );
}

export default About;
