import {useLocation} from "react-router-dom"
import  Typography  from "@mui/material/Typography";

export default function Footer() {
  const location = useLocation().pathname;
  return (
    <Typography variant="body1" align="center" color={location ==="/"? "white":"inherit"} >
      Copyright © Score Renovations
    </Typography>
  );
}
