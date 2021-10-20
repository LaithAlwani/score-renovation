import {useState} from 'react'
import { Button, Box } from '@mui/material'

export default function ImageCarousel() {
    const images = ["https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
       " https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
        "https://images.unsplash.com/photo-1481277542470-605612bd2d61"]
    

    const [imageIndex, setImageIndex] = useState(0);

    const cycleImages = (str) => {
        console.log(str)
        if (str === "next") {
            if (imageIndex >= images.length - 1) {
                setImageIndex(0)
            } else {
                setImageIndex(imageIndex+1)
            }
        } else {
            if (imageIndex <= 0) {
                setImageIndex(images.length - 1)
            } else {
                setImageIndex(imageIndex - 1)
            }
        }
    }
    
    return (
        <Box sx={{mt:8}}>
            <img src={images[imageIndex]} alt="" style={{ width: "100%", height: 500 }} />
            <Button onClick={()=>cycleImages("prev")}>Previous</Button>
            <Button onClick={()=>cycleImages("next")}>Next</Button>
        </Box>
    )
}
