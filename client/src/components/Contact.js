import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    // padding: "2rem",
    height:"100vh"
    
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    
      <div className={classes.root} id="contact">Hi from Contact</div>
   
  );
}

export default Contact;
