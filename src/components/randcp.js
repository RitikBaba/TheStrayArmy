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

function RefundP() {
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
          Refund and Cancellation Policy
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
      <CardContent sx={{ width: 1200,my:6 }}>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          The money collected through donations will be used for the welfare of stray animals. Please read the
details before donating to us.
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" sx={{px:4,py:2}}>
          Cancellation Policy
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          For Cancellations please contact the us via contact us link.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          You can cancel your monthly membership anytime.
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" sx={{px:4,py:2}}>
          Refund Policy
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          The money once deposited cannot be refunded.
          </Typography>
           
      </CardContent>
      </Card>
      <Footer/>
    </>
  )
}

export default RefundP