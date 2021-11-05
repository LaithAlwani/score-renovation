import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppFab() {
  
  return (
    <Fab
      size="small"
      aria-label="whatsapp"
      sx={{
        
        backgroundColor: "green",
        "&:hover": { backgroundColor: "darkgreen" },
        "&:active": { backgroundColor: "darkgreen" },
      }}
    >
      <WhatsAppIcon
        sx={{
          transform: "scale(1.1)",
          color: "white",
        }}
      />
    </Fab>
  );
}
