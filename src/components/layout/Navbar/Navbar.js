import { AppBar, Toolbar } from "@mui/material";
import Brandname from "./Brandname";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

export default function Navbar() {

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(68,68,68,0.5)",
        color: "white",
      }}
      >
      <Toolbar
        sx={{
          "@media (min-width:768px)": {
            width: "70%",
            margin: "0 auto",
            p:0
          },
        }}
      >
        <Brandname />
        <NavLinks />
        <SocialLinks />
      </Toolbar>
    </AppBar>
  );
}
