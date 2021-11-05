import { Fab } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function InstagramFab() {
  
  return (
    <Fab
      size="small"
      aria-label="facebook"
      sx={{
        background: "#d6249f",
        background: `radial-gradient(
                    circle at 30% 107%,
                    #fdf497 0%,
                    #fdf497 5%,
                    #fd5949 45%,
                    #d6249f 60%,
                    #285aeb 90%
                )`,
        color: "white",
        borderRadius: "50%",
        
      }}
    >
      <InstagramIcon
        sx={{
          transform: "scale(1.1)",
          //   color: "white",
        }}
      />
    </Fab>
  );
}
