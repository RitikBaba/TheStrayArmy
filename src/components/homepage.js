import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import cover from './images/cover.png'
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Navbar from './navbar';
import LeftCard from './leftcard';
import RightCard from './rightcard';
import Footer from './footer';
import homebox1 from './images/home_box1.jpg';
import homebox2 from './images/home_box2.jpg';
import homebox4 from './images/home_box4.jpg';
import homebox3 from './images/home_box3.jpeg';
import { NavLink,Link } from 'react-router-dom';
import LeftCardbtn from './leftcardbtn';

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
            sx={{ height: 450,flex:1 }}
            image= {cover}
            alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center',justifyContent: 'center' }}>
        <CardContent>
          <Typography component="div" variant="h3"  >
          Every Animal Deserves a Second Chance…
          </Typography>
          <Box>
          <Typography variant="h6" color="text.secondary" component="div">
          The animals in the street need our help. Help them today.
          </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="contained" color="error" sx={{fontSize: 20}}endIcon={<VolunteerActivismTwoToneIcon sx={{ fontSize: 400, alignItems: 'center' }}/>}>
            <Link to="/donate" className='text-link'> Donate</Link> 
            </Button>
        </Box>
      </Box>
    </Card>
    <LeftCard maintext="How we Save Street Lives" secondtext="Every day we save animals with fractures, wounds, mange, viral diseases and much more. We vaccinate them against various illnesses, conduct adoption drives and educate the community about helping animals." pic={homebox1}/>
    <RightCard maintext="Community Development" secondtext="Rescue is our strategy to immediately relieve suffering and encourage the protection of all animals' lives by sharing their incredible stories of recovery and healing.
" pic={homebox2}/>
    <LeftCardbtn maintext="Become a member of The Stray Army" secondtext="We believe the best way for our initiatives to be successful is for the community to actively get involved. This is an easy and efficient way of contributing to the great work we do at thestrayarmy. Get in touch with us and become a member by filling out the form below:" link={"https://forms.gle/zRAwqK53KsYkqPBM8"} pic={homebox3}/>
    <RightCard maintext="So many Ways to Help" secondtext="Our organization always appreciates the generosity and involvement of people like you, with every contribution going towards making thestrayarmy an even better Social Welfare Organization than it already is. With your help, we rescue thousands of animals each year from desperate situations." pic={homebox4}/>
    <Footer/>
    </>
  )
}

export default Homepage