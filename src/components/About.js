import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${
          "/images/Kitchen-S.jpg"
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: "5rem",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            sx={{ color: "white", textShadow: "2px 2px 4px black" }}
          >
            Score Renovations
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize="1.75rem"
            fontWeight="bold"
            sx={{ color: "white", textShadow: "2px 2px 4px black" }}
          >
            Renovation made easy!
          </Typography>
          <Box
            sx={{
              "@media (min-width:768px)": {
                width: "100%",
                margin: "0 auto",
              },
            }}
          >
            <Typography variant="body" fontWeight="bold" fontSize="1.5rem">
              An insured and experienced team in Ottawa, ON. specializing in
              kitchens and bathrooms remodeling and renovations, finishing
              basements from framing to drywall we do it all. We always
              providing a lengthy warranty on our work. Quality work,
              punctuality and cleanliness are always our main priority
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
