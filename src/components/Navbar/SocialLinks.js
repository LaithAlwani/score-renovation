import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppFab from "./WhatsAppFab";
import FacebookFab from "./FacebookFab";
import InstagramFab from "./InstagramFab";

const links = [
  { icon: <WhatsAppFab />, name: "WhatsApp", path:"https://wa.me/+16139817682" },
  { icon: <CallIcon />, name: "Call Us", path:"tel:6139817682" },
  { icon: <InstagramFab />, name: "Instagram", path:"https://www.instagram.com/scorerenovation/" },
  { icon: <FacebookFab />, name: "Facebook", path:"https://www.facebook.com/Score-Renovation-101499781574892/" },
];

export default function SocialLinks() {

    const handleClick = (path) => {
        window.open(path,"_blank", "noreferrer" )
    }
  return (
    <Box
      sx={{
        height: "320px",
        flexGrow: 1,
        position: "fixed",
        bottom: 16,
        right: 16
      }}
    >
      <SpeedDial
        ariaLabel="social links"     
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        size="small"
        icon={<SpeedDialIcon />}
      >
        {links.map((link) => (
          <SpeedDialAction
            key={link.name}
            icon={link.icon}
                tooltipTitle={link.name}
                onClick={()=>handleClick(link.path)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
