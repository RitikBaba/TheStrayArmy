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
import box1 from './images/treat on street.jpg';
import box2 from './images/feeding drives.jpg';
import box3 from './images/bed.jpg';
import box4 from './images/collar drive.jpg';
import box5 from './images/anti rabies drive.jpg';
import box6 from './images/adoption camp.jpg';
import box7 from './images/water bowl drives.jpg';
import aboutusmain from './images/about us cover.jpg';
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
          <Typography component="div" variant="h5" sx={{px:4,color:'red'}}>
          Working together to create a change…
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
            During the lockdown, when we were stuck in our homes, the street animals were not getting any food to eat. We started feeding the dogs in our locality every day. 
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          Eventually, we realised the various problems the animals in the street were facing. So, we dedicatedly started helping all those in need and eventually grew together as a team to form The Stray Army Charitable Trust. We believe that every animal deserves a second chance so that they can live their lives with love, care and affection.
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ height:500,flex:1.1 }}
        image= {aboutusmain}
        alt="Live from space album cover"
      />
      </Card>
      <RightCard  maintext="Treat on Street" secondtext="Every day we rescue animals in our city and we use their stories and our work to inspire and engage both the local community and people around the world." pic={box1} />
      <LeftCard maintext="Daily Feeding Drives" secondtext="The lockdown of Covid-19 affected the strays adversely. Most of the stray dogs and cattle, who relied on human beings for their source of food, were left starving. Closure of shops and roadside eateries also added to their misery. Seeing such a scenario, animal lovers of Jamshedpur came to their rescue and made sure no stray goes to sleep in an empty stomach or worse, dies of starvation." pic={box2} />
      <RightCard  maintext="Winter Drives" secondtext=" In the freezing cold of winters when we warmed ourselves in the cozy blankets, our stray animals were freezing to death. We distributed 50 jute bags filled with hay on which they curled and slept." pic={box3} />
      <LeftCard maintext="Reflective Collar Drives" secondtext="Every day we come across so many injured dogs. The rate of accidents is high during hours of poor visibility for instance at night or during rain.
Keeping this in mind, we organized a collar drive where we successfully put on 100 radium collars for stray dogs which prevented them from accidents." pic={box4} />
      <RightCard  maintext="Anti-Rabies Drive" secondtext="On 17th April 2022, The Stray Army Team, in collaboration with The Rotary Club of Jamshedpur Steel City, conducted an Anti-Rabies Camp to vaccinate all the dogs in and around the Tatanagar Railway Station. In total, we vaccinated 50 dogs." pic={box5} />
      <LeftCard maintext="Adoption Carnival" secondtext="If we are desi, then why do our pets need to be videsi…
With this view, we organized this camp with the vision to get the street animals of our city adopted. We conduct regular house visits of the adopters to ensure that all the adopted pets are safe, vaccinated and has been kept in the best of their health" pic={box6} />
      <RightCard  maintext="Water Bowl Drives" secondtext="The Stray Army Charitable Trust and The Rotary Club of Jamshedpur Steel City came together to place 25 cemented water bowls for the thirsty dogs, cows and birds and around Jamshedpur." pic={box7} />
      <Footer/>
    </>
  );
}

export default About;
