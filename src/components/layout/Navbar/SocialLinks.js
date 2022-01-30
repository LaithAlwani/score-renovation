import { Box, Fab } from "@mui/material";
import links from "../../../utils/socialLinks";

export default function SocialLinks() {
 
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 10,
        right: 3,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
      }}
    >
      {links.map((link) => (
        <a key={link.name} href={link.path} target="_blank" rel="noreferrer">
          <Fab
            aria-label={link.name}
            size="small"
            sx={link.styles}
          >
            {link.icon}
          </Fab>
        </a>
      ))}
    </Box>
  );
}
