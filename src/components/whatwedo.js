import React from "react";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import { Box } from "@mui/material";
// import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cover from './images/cover.jpg';
// import { Button } from '@mui/material';
import Navbar from "./navbar";
import Footer from "./footer";
import LeftCard from "./leftcard";
import RightCard from "./rightcard";
import Background from "./Background";
import Album from "./imagecard";
import TextImage from "./textandimage";


function Whatwedo() {
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
            What we do
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex', bgcolor:'#F5F4F4', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h6" sx={{px:4,color:'red'}}>
            What we do
          </Typography>
          <Typography color="text.secondary" component="h5" variant="h4" sx={{pl:4,py:2}} Wrap>
          Working now and forever for the well-being of animals including rescue, care, medical treatment, adoption, awareness events and many more...
          </Typography>
        </CardContent>
      </Box>
      <CardContent sx={{ width: 700,flex:1,my:6 }}>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          Our mission is to rescue and treat the unowned street animals of Jamshedpur, who have become ill or injured, and through their rescue, inspire a community to protect and defend the lives of all animals.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          We believe all animals deserve compassion and protection. We are working for the day when all animals' lives will be respected for their inherent value, whether dogs, chickens or fish
          </Typography>
      </CardContent>
      </Card>
      <TextImage/>
      <Background text="Spread Love among the Community !!" pic={cover}/>
      <Footer/>
    </>
  );
}

export default Whatwedo;
