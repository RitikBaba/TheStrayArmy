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

function About() {
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
            About Us
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex', bgcolor:'#F5F4F4', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:2, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h6" sx={{px:4,color:'red'}}>
            About Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{px:4,py:2}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at porro velit explicabo ullam aut, corporis maiores doloribus nemo perspiciatis quaerat praesentium, dolorem aliquam sequi fugiat! Explicabo eaque, laboriosam deleniti porro quo voluptates a ab magni, nesciunt atque similique at placeat. Delectus adipisci, doloribus sit commodi eligendi facere aspernatur consequatur!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{px:4,py:2}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at porro velit explicabo ullam aut, corporis maiores doloribus nemo perspiciatis quaerat praesentium, dolorem aliquam sequi fugiat! Explicabo eaque, laboriosam deleniti porro quo voluptates a ab magni, nesciunt atque similique at placeat. Delectus adipisci, doloribus sit commodi eligendi facere aspernatur consequatur!
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 700,flex:1 }}
        image= {cover}
        alt="Live from space album cover"
      />
      </Card>
      <RightCard/>
      <LeftCard/>
      <Footer/>
    </>
  );
}

export default About;
