import { Container, Grid } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Title from "./Title";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <Container className="container">
      <Title>
        <PermMediaIcon fontSize="large" /> GALLERY
      </Title>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <img src="/images/bath01.jpg" alt="bath renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/bath02.jpg" alt="bath renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/bath03.jpg" alt="bath renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/bath04.jpg" alt="bath renovation" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <img src="/images/floor01.jpeg" alt="floor renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/floor02.jpeg" alt="floor renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/floor03.jpg" alt="floor renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/floor04.jpg" alt="floor renovation" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <img src="/images/kitchen01.jpg" alt="kitchen renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/kitchen02.jpg" alt="kitchen renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/bath05.jpg" alt="shower renovation" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="/images/bath06.jpg" alt="shower renovation" />
        </Grid>
      </Grid>
    </Container>
  );
}
