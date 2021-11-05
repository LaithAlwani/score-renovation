import React from "react";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

function Footer() {
  const location = useHistory().location
  return (
    <Typography variant="body1" align="center" color={location.pathname ==="/gallery" ? "white" :"inherit"} >
      Copyright © Score Renovations
    </Typography>
  );
}

export default Footer;
