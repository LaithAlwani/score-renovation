import { Box, Container, Grid } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Title from "./Title";

export default function Portfolio() {
  return (
    <Box sx={{ backgroundColor: "#444444", padding: "5rem 0", marginBottom:"3rem" }}>
      <Container>
        <Title
          text="GALLERY"
          icon={<PermMediaIcon fontSize="large" />}
          color="white"
        />
        <Grid container spacing={2}>
          <Grid container spacing={1} item xs={12} md={4} >
            <Grid item xs={6} >
              <img
                src="/images/bath01.jpg"
                alt="bath renovation"
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath02.jpg"
                alt="bath renovation"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath03.jpg"
                alt="bath renovation"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath04.jpg"
                alt="bath renovation"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} item xs={12} md={4}  >
            <Grid item xs={6}  >
              <img
                src="/images/floor01.jpeg"
                alt="floor renovation"
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/floor02.jpeg"
                alt="floor renovation"
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/floor03.jpg"
                alt="floor renovation"
                style={{ width: "100%", height:"auto" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/floor04.jpg"
                alt="floor renovation"
                style={{ width: "100%", height:"auto"  }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} item xs={12} md={4}  >
            <Grid item xs={6} >
              <img
                src="/images/kitchen01.jpg"
                alt="kitchen renovation"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/kitchen02.jpg"
                alt="kitchen renovation"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath05.jpg"
                alt="shower renovation"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} >
              <img
                src="/images/bath06.jpg"
                alt="shower renovation"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
