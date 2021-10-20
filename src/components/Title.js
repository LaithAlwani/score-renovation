import { Divider, Typography } from "@mui/material";
import React from "react";

export default function Title({ text, icon }) {
  return (
    <>
      <Divider textAlign="left" sx={{m:1}}>
        
        <Typography variant="h4">{icon} {text}</Typography>
      </Divider>
    </>
  );
}
