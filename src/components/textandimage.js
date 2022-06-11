import React from 'react'
import { Box } from "@mui/material";
// import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cover from './images/cover.jpg';
function TextImage() {
  return (
    <>
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
                      Heading
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
                      Heading
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
                      Heading
            </Typography>
        </CardContent>
        
      </Box>
      </Card>
    </>
  )
}

export default TextImage