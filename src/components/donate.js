import React from "react";
import { Box } from "@mui/material";
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import donateimg from './images/donate.jpg';
import cover from './images/cover.jpg';
// import { Button } from '@mui/material';
import Navbar from "./navbar";
import Footer from "./footer";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import TitlebarImageList from "./image_with_name";


function Donate() {
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
                Donate
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex',bgcolor:'#F5F4F4', alignItems: 'center', justifyContent:'space-between',boxShadow: 'none'}}>
        <CardMedia
            component="img"
            sx={{ height: 500,flex:1.4 }}
            image= {donateimg}
            alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center',justifyContent: 'center' }}>
        <CardContent>
          <Box>
          <Typography variant="h5" color="text.secondary" component="div">
          Your donation ensures that injured and ill ownerless animals are rescued and receive life-saving medical attention. Make your contribution towards a better and safe place for the strays to live peacefully.
          </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
      <Footer/>
    </>
  )
}

export default Donate