import { Box, Container, Grid } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Title from "./Title";

export default function Portfolio() {
  return (
    <Container sx={{ paddingTop: "6rem", paddingBottom: "3rem" }}>
      <Title>
        <PermMediaIcon fontSize="large" /> GALLERY
      </Title>
      <Grid container spacing={2}>
        <Grid container spacing={1} item xs={12} md={6}>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/bath01.jpg"
              alt="bath renovation"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/bath02.jpg"
              alt="bath renovation"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/bath03.jpg"
              alt="bath renovation"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/bath04.jpg"
              alt="bath renovation"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} item xs={12} md={6}>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/floor01.jpeg"
              alt="floor renovation"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/floor02.jpeg"
              alt="floor renovation"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/floor03.jpg"
              alt="floor renovation"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/floor04.jpg"
              alt="floor renovation"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} item xs={12} md={6}>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/kitchen01.jpg"
              alt="kitchen renovation"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/kitchen02.jpg"
              alt="kitchen renovation"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/bath05.jpg"
              alt="shower renovation"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/images/bath06.jpg"
              alt="shower renovation"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
