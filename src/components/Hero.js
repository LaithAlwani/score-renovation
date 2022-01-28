import { Box, Button, Typography } from "@mui/material";

const styles = {
  root: {
    minHeight: "100vh",
  },
  hero: {
    backgroundImage: `url("/images/main.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  textWhite: {
    fontWeight: "bold",
    color: "white",
    textShadow: "1px 1px #444444",
  },
  button: {
    mt: 2,
    width: "250px",
    backgroundColor: "white",
    color: "black",
    "&:hover": { backgroundColor: "#888888", color: "white" },
  },
};

export default function Hero() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.hero} role="img" aria-label="kitchen reonvations">
        <Box sx={styles.textContainer}>
          <Typography variant="h1" fontSize="9vmin" sx={styles.textWhite}>
            Quality renovations
          </Typography>
          <Typography variant="body1" fontSize="7vmin" sx={styles.textWhite}>
            is our main priority
          </Typography>
          <Button variant="contained" sx={styles.button} href="/about-us">
            about us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
