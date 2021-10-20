import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Title from "./Title";

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
        margin="6rem 0"
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
          {/* <Typography
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
          </Typography> */}
        </Container>
      </Box>
      <Container>
        <Title text="ABOUT US" icon={<InfoIcon fontSize="large" />}/>
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
    </Box>
  );
}
