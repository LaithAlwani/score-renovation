import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height:"100vh"
  },
}));

function Portfolio() {
  const classes = useStyles();
  return (
    
      <div className={classes.root} id="portfolio">
        Portfolio
      </div>
    
  );
}

export default Portfolio;
