import React from "react";
import Typography from "@material-ui/core/Typography";
import Box  from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/Kitchen-S.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom: "5rem"
  },
  titleContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
  },
  text:{
    color:"white",
    textShadow:"2px 2px 4px black"
  },
  desc:{
    "@media (min-width:768px)":{
      width:"100%",
      margin:"0 auto"
    }
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <Typography variant="h3" component="h1" fontWeight="bold" className={classes.text}>
            Score Renovations
          </Typography>
          <Typography variant="subtitle1" fontSize="1.75rem" fontWeight="bold" className={classes.text}>
            Renovation made easy!
          </Typography>
          {/* <Box className={`${classes.desc} ${classes.text}`}>
            <Typography variant="body" fontWeight="bold" fontSize="1.5rem">
              An insured and experienced team in Ottawa, ON. specializing in
              kitchens and bathrooms remodeling and renovations, finishing
              basements from framing to drywall we do it all. We always
              providing a lengthy warranty on our work. Quality work,
              punctuality and cleanliness are always our main priority
            </Typography>
          </Box> */}
        </div>
      </div>
    </div>
  );
}

export default About;
