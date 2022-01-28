import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function AboutCard({ item }) {
  const { title, text, image, alt } = item;
  return (
    <Card sx={{ width: "100%", height: 475 }}>
      <CardMedia component="img" src={image} alt={alt} height="300" />
      <CardContent>
        <Typography variant="h4" fontSize="3vmax" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
}
