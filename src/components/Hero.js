import { Box, Button, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width="100%">
        <Box
          sx={{
            width: "100%",
            minHeight: "70vh",
            margin: "1rem 0",
            position: "relative",
            backgroundImage: `url("/images/kitchen-min.jpg")`,
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box sx={{backgroundColor:"rgba(0,0,0,0.5)", width:"100%", height:"100%", position:"absolute"}}>
            <Container>
              <Typography
                variant="h1"
                fontSize="7vmin"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "1px 1px #444444",
                  mt:1
                }}
              >
                Score Renovations
              </Typography>
            </Container>
            <Container
              sx={{ textAlign: "center", position: "absolute", bottom: 20 }}
            >
              <Typography
                variant="h2"
                fontSize="5vmin"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "1px 1px #444444",
                }}
              >
                Quality is our main priority
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  width: "250px",
                  backgroundColor: "#5b5b5b",
                  "&:hover": { backgroundColor: "#444444" },
                }}
                href="#about"
              >
                Learn More
              </Button>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
