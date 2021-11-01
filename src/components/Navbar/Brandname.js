import { Box, Button, Typography } from "@mui/material";
export default function Brandname() {
  return (
    <Box sx={{ flexGrow: 1, p:0 }}>
      <Button href="#main" sx={{p:0}}>
        <img
          src={"/images/srl-white.ico"}
          alt="logo"
          style={{ width: "60px", height:"60px" }}
        />
      </Button>
      <Typography variant="subtitle2" sx={{whiteSpace:"nowrap"}} >
        Score Renovations
      </Typography>
    </Box>
  );
}
