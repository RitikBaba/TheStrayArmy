import React from 'react'
import { Box } from "@mui/material";
// import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cover from './images/cover.jpg';
import box2 from './images/care.jpg';
import box3 from './images/medical treatment.jpg';
import box4 from './images/adoption.jpg';
import box5 from './images/awareness.png';
import box6 from './images/feeding.jpg';
import box1 from './images/rescue.jpg';

function TextImage() {
  return (
    <>
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={box1}
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Rescue
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={box2}
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Care
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={box3}
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Medical Treatment
            </Typography>
        </CardContent>
        
      </Box>
      </Card>
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={box4}
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Adoption
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={box5}
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Awareness
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={box6}
                    alt="random"
                    height={600}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Feeding
            </Typography>
        </CardContent>
        
      </Box>
      </Card>
    </>
  )
}

export default TextImage