
import { Fab } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function FacebookFab() {
  
    return (
    <Fab
      size="small"
      aria-label="facebook"
      sx={{
        
        backgroundColor: "rgb(66, 103, 178)",
         "&:hover": { backgroundColor: "#3b5998" },
         "&:active": { backgroundColor: "#3b5998" },
      }}
    >
      <FacebookIcon
        sx={{
          transform: "scale(1.1)",
          color: "white",
        }}
      />
    </Fab>
  );
}