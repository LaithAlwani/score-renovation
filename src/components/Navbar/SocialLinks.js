import { Box, Fab } from "@mui/material";
import links from "../../utils/socialLinks";

export default function SocialLinks() {
  const handleClick = (path) => {
    window.open(path, "_blank", "noreferrer");
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        bottom: 10,
        right: 3,
        display: "flex",
        flexDirection: "column"
      }}
    >
      {links.map((link) => (
        <Fab
          key={link.name}
          aria-label={link.name}
          size="small"
          tooltipTitle={link.name}
          onClick={() => handleClick(link.path)}
          sx={link.styles}
        >
          {link.icon}
        </Fab>
      ))}
    </Box>
  );
}
