import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material";

function About() {
  return (
    <Container
      id="about"
      sx={{
        minHeight: "100vh",
        height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
      }}
    >
      <Box >

      <Typography variant="h4" sx={{textAlign:"center", mb:2}}>About Us</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{width:300, height:425, margin:"0 auto"}}>
            <CardMedia component="img" src="https://images.unsplash.com/photo-1549388604-817d15aa0110" alt="" height="300" />
            <CardContent>
              <Typography variant="h6">Tilte</Typography>
              <Typography variant="body2">specializing in
              kitchens and bathrooms remodeling and renovations</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{width:300, height:425, margin:"0 auto"}}>
            <CardMedia component="img" src="https://images.unsplash.com/photo-1525097487452-6278ff080c31" alt="" height="300" />
            <CardContent>
              <Typography variant="h6">Tilte</Typography>
              <Typography variant="body2">finishing
              basements from framing to drywall we do it all</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{width:300, height:425, margin:"0 auto"}}>
            <CardMedia component="img" src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" alt="" height="300" />
            <CardContent>
              <Typography variant="h6">Tilte</Typography>
              <Typography variant="body2">We always
              providing a lengthy warranty on our work. Quality work,
              punctuality and cleanliness are always our main priority</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
      {/* <Box
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
      </Box> */}
    </Container>
  );
}

export default About;
