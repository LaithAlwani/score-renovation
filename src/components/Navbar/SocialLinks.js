import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import links from "../utils/socialLinks"

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
                onClick={() => handleClick(link.path)}
                sx={link.styles}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
