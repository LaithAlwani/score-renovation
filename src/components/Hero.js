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
        <Container>
          <Typography
            variant="h2"
            fontSize="8vmin"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "1px 1px black",
            }}
          >
            Score Renovations
          </Typography>
        </Container>

        <Box
          sx={{
            width: "100%",
            minHeight: "50vh",
            margin: "1rem 0",
            position: "relative",
            backgroundImage: `url("/images/Kitchen_(8).jpg")`,
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
        <Container sx={{textAlign:"center"}}>
          <Typography
                      variant="h3"
                      fontSize="6vmin"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "1px 1px #5b5b5b",
            }}
          >
            Quality is our main prioroty
          </Typography>
              <Button variant="contained" sx={{mt:2, width:"250px", backgroundColor:"#5b5b5b", "&:hover":{backgroundColor:"#444444"}}} href="#about">Learn More</Button>
              </Container>
      </Box>
    </Box>
  );
}
