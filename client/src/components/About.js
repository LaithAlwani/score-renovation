import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";


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
