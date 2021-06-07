import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/Kitchen-S.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginBottom: "5rem",
  },
  titleContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <Typography variant="h2" fontWeight="bold">
            Score Renovations
          </Typography>
          <Typography variant="subtitle1" fontSize="2rem" fontWeight="bold">
            Renovation made easy!
          </Typography>
          {/* <Box className={classes.desc}>
            <Typography variant="subtitle1" fontWeight="bold">
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
