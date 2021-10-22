import { Divider, Typography } from "@mui/material";
import React from "react";

export default function Title({ text, icon, color }) {
  return (
    <>
      <Divider textAlign="left" sx={{m:1, color:{color}}}>  
        <Typography variant="h4">{icon} {text}</Typography>
      </Divider>
    </>
  );
}
