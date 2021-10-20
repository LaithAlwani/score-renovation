import { Box, Typography } from "@mui/material"
export default function Brandname() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={"/images/score-renovation-black_logo.png"}
            alt="logo"
            style={{ width: "75px" }}
          />
          <Typography variant="body2" sx={{whiteSpace: "nowrap"}}>Quality Construction</Typography>
        </Box>
    )
}
