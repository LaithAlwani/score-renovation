import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material";
import ImageCarousel from "./ImageCarousel";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",

        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Box
        margin="5rem 0"
        height="450px"
        position="relative"
        sx={{
          backgroundImage: `url("/images/Kitchen_(8).jpg")`,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              bottom: 30,
              color: "white",
              fontWeight: "bold",
              textShadow: "1px 1px black",
            }}
          >
            Quality is our main prioroty
          </Typography>
        </Container>
      </Box>
      <Container>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
          About Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ width: "100%", height: 450, margin: "0 auto" }}>
              <CardMedia
                component="img"
                src="images/20210402_115058.jpg"
                alt=""
                height="300"
              />
              <CardContent>
                <Typography variant="h6">Remodeling</Typography>
                <Typography variant="body2">
                  specializing in kitchens and bathrooms remodeling and
                  renovations
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ width: "100%", height: 450, margin: "0 auto" }}>
              <CardMedia
                component="img"
                src="images/basement02.jpeg"
                alt=""
                height="300"
              />
              <CardContent>
                <Typography variant="h6">Finishing</Typography>
                <Typography variant="body2">
                  From framing to drywalls we do it all!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ width: "100%", height: 450, margin: "0 auto" }}>
              <CardMedia
                component="img"
                src="images/bath_reno_0004.jpg"
                alt=""
                height="300"
              />
              <CardContent>
                <Typography variant="h6">Quality</Typography>
                <Typography variant="body2">
                  Punctuality and cleanliness are always our main priority,
                  backed by our lengthy warranty.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* 
            <Typography variant="body" fontWeight="bold" fontSize="1.5rem">
              An insured and experienced team in Ottawa, ON. specializing in
              kitchens and bathrooms remodeling and renovations, finishing
              basements from framing to drywall we do it all. We always
              providing a lengthy warranty on our work. Quality work,
              punctuality and cleanliness are always our main priority
            </Typography>
          
         */}
    </Box>
  );
}
