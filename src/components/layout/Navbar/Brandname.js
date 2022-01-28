import { Box, Button, Typography } from "@mui/material";

export default function Brandname() {
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <Button href="/" sx={{ pb: 1.5 }}>
        <img
          src={"/images/srl-white.ico"}
          alt="logo"
          style={{ width: "60px", height: "60px" }}
        />
      </Button>
      <Typography
        variant="subtitle2`"
        sx={{ whiteSpace: "nowrap", position: "absolute", bottom: 0, left:0 }}
      >
        Score Renovations
      </Typography>
    </Box>
  );
}
