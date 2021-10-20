import { Box, ImageList, ImageListItem, Container, Grid } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Title from "./Title";

export default function Portfolio() {
  return (
    <Container
      id="portfolio"
      sx={{
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Box>
        <Title text="GALLERY" icon={<PermMediaIcon fontSize="large" />} />
        <Grid container spacing={1}>
          <Grid item xs={6} md={3}>
            <img
              src="/images/20210608_131330-min.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <img
              src="/images/20210615_143717-min.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <img
              src="/images/20210716_121341-min.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <img
              src="/images/20210716_121248-min.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
