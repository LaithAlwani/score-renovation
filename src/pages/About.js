import { Container, Grid } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Title from "../components/Title";
import AboutCard from "../components/AboutCard";
import aboutInfo from "../utils/aboutInfo";

export default function About() {
  return (
    <Container sx={{ paddingTop: "6rem", paddingBottom: "3rem" }}>
      <Title>
        <InfoIcon fontSize="large" /> ABOUT
      </Title>
      <Grid container spacing={2}>
        {aboutInfo.map((item, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <AboutCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
