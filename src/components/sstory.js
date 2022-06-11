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
import Footer from "./footer";
import LeftCard from "./leftcard";
import RightCard from "./rightcard";
import Background from "./Background";
import Album from "./imagecard";
import TextImage from "./textandimage";

function Sstory() {
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
                Success Stories
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex', bgcolor:'#F5F4F4', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h6" sx={{px:4,color:'red'}}>
            Success Stories
          </Typography>
          <Typography color="text.secondary" component="div" variant="h4" sx={{pl:4,py:2}} Wrap>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at porro velit explicabo ullam aut, corporis 
          </Typography>
        </CardContent>
      </Box>
      <CardContent sx={{ width: 700,flex:1,my:6 }}>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{px:4,py:2}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ex officia dolores in minima labore, autem incidunt ea impedit aliquam, enim voluptatum delectus ab et.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{px:4,py:2}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ex officia dolores in minima labore, autem incidunt ea impedit aliquam, enim voluptatum delectus ab et.
          </Typography>
      </CardContent>
      </Card>
      <RightCard/>
      <LeftCard/>
      <Background/>
      <Album/>
      <TextImage/>
      <Footer/>
    </>
  )
}

export default Sstory