import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppFab() {
  const whatAppClick = () => {
    window.open("https://wa.me/+16139817682", "_blank", "noreferrer");
  };
  return (
    <Fab
      size="small"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 10,
        backgroundColor: "green",
        "&:hover": { backgroundColor: "darkgreen" },
        "&:active": { backgroundColor: "darkgreen" },
      }}
    >
      <WhatsAppIcon
        onClick={whatAppClick}
        sx={{
          transform: "scale(1.1)",
          color: "white",
        }}
      />
    </Fab>
  );
}
