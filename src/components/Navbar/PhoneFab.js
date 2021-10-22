import { Fab } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export default function PhoneFab() {
  const phoneClick = () => {
    window.open("tel:6139817682", "_blank", "noreferrer");
  };
  return (
    <Fab
      size="small"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 70,
        right: 10,
      }}
    >
      <CallIcon
        onClick={phoneClick}
        sx={{
          transform: "scale(1.1)",
          color: "black",
        }}
      />
    </Fab>
  );
}
