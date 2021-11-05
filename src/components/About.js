import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Title from "./Title";

export default function About() {
  return (
    <Box
      sx={{
        margin: "5rem 0"
      }}
    >
      <Container>
        <Title text="ABOUT" icon={<InfoIcon fontSize="large" />} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ width: "100%", height: 475 }}>
              <CardMedia
                component="img"
                src="images/about-kitchen.jpg"
                alt="kitchen renovation"
                height="300"
              />
              <CardContent>
                <Typography variant="h4" fontSize="3vmax" fontWeight="bold">Remodel</Typography>
                <Typography variant="body1">
                  specializing in kitchens and bathrooms remodeling and
                  renovations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ width: "100%", height: 475 }}>
              <CardMedia
                component="img"
                src="images/about-basement.jpeg"
                alt="basement renovation"
                height="300"
              />
              <CardContent>
                <Typography variant="h4" fontSize="3vmax" fontWeight="bold">Finish</Typography>
                <Typography variant="body1">
                  From framing to drywalls we renovate any room in your house.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ width: "100%", height: 475 }}>
              <CardMedia
                component="img"
                src="images/about-bath.jpg"
                alt="bath renovation"
                height="300"
              />
              <CardContent>
                <Typography variant="h4" fontSize="3vmax" fontWeight="bold">Quality</Typography>
                <Typography variant="body1">
                  Punctuality and cleanliness are always our main priority in any renovation,
                  backed by our lengthy warranty.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <div id="portfolio"></div>
    </Box>
  );
}
