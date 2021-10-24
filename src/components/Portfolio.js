import { Box, Container, Grid } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Title from "./Title";

export default function Portfolio() {
  return (
    <Box sx={{ backgroundColor: "#444444", padding: "2rem 0" }}>
      <Container>
        <Title
          text="GALLERY"
          icon={<PermMediaIcon fontSize="large" />}
          color="white"
        />
        <Grid container spacing={5}>
          <Grid container spacing={1} item xs={12} md={4} >
            <Grid item xs={6} >
              <img
                src="/images/bath01.avif"
                alt=""
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath02.avif"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath03.avif"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath04.avif"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} item xs={12} md={4}  >
            <Grid item xs={6}  >
              <img
                src="/images/floor01.avif"
                alt=""
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/floor02.avif"
                alt=""
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/floor03.avif"
                alt=""
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/floor04.avif"
                alt=""
                style={{ width: "100%", height:"auto"  }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} item xs={12} md={4}  >
            <Grid item xs={6} >
              <img
                src="/images/kitchen01.avif"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/kitchen02.avif"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath05.avif"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath06.avif"
                alt=""
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
