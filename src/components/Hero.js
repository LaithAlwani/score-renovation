import { Box, Button, Container, Typography } from "@mui/material";

const styles = {
  root: {
    minHeight: "100vh",
    
  },
  hero: {
    minHeight: "100vh",
    position: "relative",
    backgroundImage: `url("/images/kitchen-min.jpg")`,
    backgroundPosition: "left center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100vh",
    position: "absolute",
    textAlign: "center",
  },
  textWhite: {
    mt: 15,
    fontWeight: "bold",
    color: "white",
    textShadow: "1px 1px #444444",
  },
  button: {
    mt: 2,
    width: "250px",
    backgroundColor: "#5b5b5b",
    "&:hover": { backgroundColor: "#444444" },
  },
};

export default function Hero() {
  return (
    <Box id="main" sx={styles.root}>
      <Box width="100%">
        <Box sx={styles.hero}>
          <Box sx={styles.textContainer}>
            <Typography variant="h1" fontSize="7vmin" sx={styles.textWhite}>
              Score Renovations
            </Typography>

            <Box
              sx={{
                width: "100%",
                position: "absolute",
                bottom: 100,
              }}
            >
              <Typography variant="h2" fontSize="5vmin" sx={styles.textWhite}>
                Quality is our main priority
              </Typography>
              <Button variant="contained" sx={styles.button} href="#about">
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <div id="about"></div>
    </Box>
  );
}
