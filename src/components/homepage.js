import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import cover from './images/cover.jpg'
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Homepage() {
  return (
    <>
        {/* <Box sx={{bgcolor:'#F7C85C', display:'flex' }}>
            <Box sx={{display:'flex',justifyContent: 'flex-end',mr:35}}>
                <img src={cover} alt="img not found" height={"450px"} />
            </Box>
            <Box sx={{display:'flex',alignItems: 'center' }}>
                <h1>Hello World</h1>
            </Box>
                <Box sx={{display:'flex',alignItems: 'center' }}>
                <Button variant="contained" color="error" endIcon={<VolunteerActivismTwoToneIcon sx={{ fontSize: 100 }}/>}>
                  Donate
                </Button>
                </Box>
        </Box> */}
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
    </>
  )
}

export default Homepage