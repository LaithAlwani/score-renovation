import { Divider, Typography } from "@mui/material";

export default function Title({ text, icon, color }) {
  return (
    <>
      <Divider textAlign="left" sx={{m:1, color:{color}}}>  
        <Typography variant="h3" fontSize="2.5rem">{icon} {text}</Typography>
      </Divider>
    </>
  );
}
