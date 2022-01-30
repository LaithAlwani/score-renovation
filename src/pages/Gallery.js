import { Container, Grid } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Title from "../components/Title";
import images from "../utils/images";
import "../components/Gallery.css";
import { useDocumentTitle } from "../utils/setDocumentTitle";

export default function Gallery() {
  const [documentTitle] = useDocumentTitle("Gallery");
  return (
    <Container className="container">
      <Title>
        <PermMediaIcon fontSize="large" /> GALLERY
      </Title>
      <Grid container spacing={2}>
        {images.map((image,i) => (
          <Grid key={i}item xs={12} sm={6} md={4}>
            <img src={image.name} alt={image.alt} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
