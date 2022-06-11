import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import cover from './images/cover.jpg'
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Navbar from './navbar';
import LeftCard from './leftcard';
import RightCard from './rightcard';
import Footer from './footer';

function Homepage() {
  return (
    <>
        <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <Card sx={{ display: 'flex',bgcolor:'#F7C85C', alignItems: 'center', justifyContent:'space-between',boxShadow: 'none'}}>
        <CardMedia
            component="img"
            sx={{ height: 500,flex:1 }}
            image= {cover}
            alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h3">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="contained" color="error" sx={{fontSize: 20}}endIcon={<VolunteerActivismTwoToneIcon sx={{ fontSize: 400, alignItems: 'center' }}/>}>
                Donate
            </Button>
        </Box>
      </Box>
    </Card>
    <LeftCard/>
    <RightCard/>
    <LeftCard/>
    <RightCard/>
    <Footer/>
    </>
  )
}

export default Homepage