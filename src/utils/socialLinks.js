import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const links = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    path: "https://www.instagram.com/scorerenovation/",
    styles: {
      background: `radial-gradient(
                circle at 30% 107%,
                #fdf497 0%,
                #fdf497 5%,
                #fd5949 45%,
                #d6249f 60%,
                #285aeb 90%
                )`,
      color: "white",
      marginBottom:"0.35rem"
    },
  },
  {
    icon: <FacebookIcon sx={{ color: "white" }} />,
    name: "Facebook",
    path: "https://www.facebook.com/Score-Renovation-101499781574892/",
    styles: {
      backgroundColor: "rgb(66, 103, 178)",
      "&:hover": { backgroundColor: "#3b5998" },
      "&:active": { backgroundColor: "#3b5998" },
      marginBottom:"0.25rem"
    },
  },
  { icon: <CallIcon />, name: "Call Us", path: "tel:6139817682" },
  {
    icon: <WhatsAppIcon sx={{ color: "white" }} />,
    name: "WhatsApp",
    path: "https://wa.me/+16139817682",

    styles: {
      backgroundColor: "green",
      "&:hover": { backgroundColor: "darkgreen" },
      "&:active": { backgroundColor: "darkgreen" },
      marginTop:"0.35rem"
    },
  },
];

export default links;
