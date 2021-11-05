import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const styles = {
  root: {
    minHeight: "100vh",
    marginBottom: "-35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  hero: {
    minHeight: "100vh",
    marginBottom: "-35px",
  },
};

export default function Layout({ children }) {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <Navbar />
      <Box sx={location.pathname === "/"? styles.hero : styles.root}>{children}</Box>
      <Footer />
    </>
  );
}
