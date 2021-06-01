import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Portfolio() {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.root} id="portfolio">
        Portfolio
      </div>
      <Grid item xs={12} sm={6} md={4}>
        <Card>1</Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>2</Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>3</Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>4</Card>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
