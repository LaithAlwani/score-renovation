import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const styles = {
  minHeight: "100vh",
  marginBottom: "-35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={styles}>{children}</Box>
      <Footer />
    </>
  );
}
