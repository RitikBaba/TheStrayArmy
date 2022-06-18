import React from "react";
import { Box } from "@mui/material";
// import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cover from './images/cover.jpg';
// import { Button } from '@mui/material';
import Navbar from "./navbar";
import EmailIcon from '@mui/icons-material/Email';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import Button from '@mui/material/Button';
import Footer from "./footer";
import LeftCard from "./leftcard";
import RightCard from "./rightcard";
import Background from "./Background";
import Album from "./imagecard";
import TextImage from "./textandimage";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import UpforA from "./upforadop";

function Contact_us() {
  return (
    <>
        <Box>
        <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex',height: 300, bgcolor:'#F7C85C',flex:1, justifyContent: 'center',alignItems: 'center',backgroundImage:{cover} }}>
          <Typography component="div" variant="h1">
                Contact us
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h6" sx={{px:4,color:'red'}}>
          Contact us
          </Typography>
          <Typography color="text.secondary" component="div" variant="h3" sx={{pl:4,py:2}} Wrap>
          Contact us for more information 
          </Typography>
        </CardContent>
      </Box> */}
      <CardContent sx={{ width: 700,my:6 }}>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          Name - The Stray Army Charitable Trust
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          Address - Mango, Jamshedpur- 831012.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          Contact number - +91 9931425381,	+91 7609874246
          </Typography>
          <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<EmailIcon/>}
                href=" mailto:thestrayarmy@gmail.com"
                size="large"
              >
                Email
           </Button>
           <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
           Get in touch with us through Facebook and Instagram:
          </Typography>
          <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<FacebookIcon/>}
                href="https://www.facebook.com/thestrayarmy"
                target="_blank"
                size="large"
              >
                Facebook
              </Button>
              <Button
                sx={{  color: 'text.secondary', display: 'flex' }}
                startIcon={<InstagramIcon/>}
                href="https://www.instagram.com/thestrayarmy/"
                target="_blank"
                size="large"
              >
                Instagram
              </Button>
              <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
              To become a member of The Stray Army Charitable Trust, fill out the form from the below link :
          </Typography>
          <Button sx={{  color: 'text.secondary', display: 'flex' }} target="_blank" href="https://forms.gle/zRAwqK53KsYkqPBM8" endIcon={<BorderColorRoundedIcon sx={{ fontSize: 100, alignItems: 'center' }}/>}>
                Click Here
            </Button>
            <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
            To adopt a Stray, visit the Up for Adoption page and fill the form. We will get in touch with you soon.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          For questions about your donations or different donation methods, visit the ‘Donate’ page.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          For other queries, write an email to us at thestrayarmy@gmail.com and we will get in touch with you soon.
          </Typography>
      </CardContent>
      </Card>
      <Footer/>
    </>
  )
}

export default Contact_us