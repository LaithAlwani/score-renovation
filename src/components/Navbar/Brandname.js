import { Box, Button, Typography } from "@mui/material";
export default function Brandname() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button href="#main">
        <img
          src={"/images/score-renovation-black_logo.png"}
          alt="logo"
          style={{ width: "75px" }}
        />
      </Button>
      <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
        Quality Construction
      </Typography>
    </Box>
  );
}
