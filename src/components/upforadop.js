import React from "react";
import { Box } from "@mui/material";
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import cover from './images/cover.jpg';
import ufa1 from './images/ufa1.jpg';
import ufa2 from './images/ufa2.jpg';
import ufa3 from './images/ufa3.jpg';
import ufa4 from './images/ufa4.jpg';
import ufa_cover from './images/ufa_cover.png';
// import { Button } from '@mui/material';
import Navbar from "./navbar";
import Footer from "./footer";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import TitlebarImageList from "./image_with_name";


function UpforA() {
  return (
    <>
        <Box>
        <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex',height: 300, bgcolor:'#F7C85C',flex:1, justifyContent: 'center',alignItems: 'center',backgroundImage:{cover} }}>
          <Typography component="div" variant="h1">
          Up For Adoption
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex',bgcolor:'#F5F4F4', alignItems: 'center', justifyContent:'space-between',boxShadow: 'none'}}>
        <CardMedia
            component="img"
            sx={{ height: 500,flex:1 }}
            image= {ufa_cover}
            alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center',justifyContent: 'center' }}>
        <CardContent>
          <Typography component="div" variant="h3"  >
          Adopt Don't Shop...
          </Typography>
          <br />
          <Box>
          <Typography variant="h6" color="text.secondary" component="div">
          You can't change a dogs past, but you could rewrite his future. While we may never know the struggles and the pain a rescue dog might have gone through, but the love they show is unlike any other. 
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
          Fill the form below to adopt a dog and we will connect with you soon.
          </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="contained" target="_blank" href="https://forms.gle/SYYrM7P6UUUg8W7q6" color="error" endIcon={<BorderColorRoundedIcon sx={{ fontSize: 100, alignItems: 'center' }}/>}>
                Click Here
            </Button>
        </Box>
      </Box>
    </Card>
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ufa1}
                    alt="random"
                    height={500}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Alpha (#1)
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ufa2}
                    alt="random"
                    height={500}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Beta (#2)
            </Typography>
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ufa3}
                    alt="random"
                    height={500}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Gamma (#3)
            </Typography>
        </CardContent>
      </Box>
      </Card>
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ufa4}
                    alt="random"
                    height={500}
            />
            <Typography gutterBottom variant="h5" component="h2" sx={{display: 'flex',alignItems: 'center', justifyContent:'space-evenly'}}>
            Ray (#4)
            </Typography>
        </CardContent>
      </Box>
      </Card>
      <Footer/>
    </>
  )
}

export default UpforA