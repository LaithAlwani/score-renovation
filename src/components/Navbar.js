import { Link, useHistory } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Zoom from "@material-ui/core/Zoom";

export default function Navbar() {
  const history = useHistory()

  const whatAppClick = () => {
    console.log("whatsapp");
    window.open("https://wa.me/+16139817682", "_blank", "noreferrer")
    // history.push({pathname: "https://wa.me/+16139817682"})
  }
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.5) !important",
        color: "black !important",
      }}
    >
      <Toolbar
        id="back-to-top-anchor"
        sx={{
          "@media (min-width:768px)": {
            width: "70%",
            margin: "0 auto",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={
              process.env.PUBLIC_URL + "/images/score-renovation-black_logo.png"
            }
            alt="logo"
            style={{ width: "75px" }}
          />
        </Box>

        <Button color="inherit" href="#about">
          About
        </Button>
        <Button color="inherit" href="#portfolio">
          Gallery
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
        <Fab
          size="small"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "green",
          }}
        >
          <WhatsAppIcon
            onClick={whatAppClick}
            
            sx={{
              transform: "scale(1.3)",

              color: "white",
            }}
          />
        </Fab>
      </Toolbar>
    </AppBar>
  );
}
