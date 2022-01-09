import { Divider, Typography } from "@mui/material";

export default function Title({children }) {
  return (
    <Divider textAlign="left">
      <Typography variant="h4">
        {children}
      </Typography>
    </Divider>
  );
}
