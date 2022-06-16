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
import ad0 from './images/adp0.jpg';
import shiro from './images/shiro.jpg';
import bt from './images/bade thakur.jpg';
import three from './images/three musketeers.jpg';
import TitlebarImageList from "./image_with_name";


function Sstory() {
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
                Success Stories
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex', bgcolor:'#F5F4F4', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h6" sx={{px:4,color:'red'}}>
          Rescued is the best breed…
          </Typography>
          <Typography color="text.secondary" component="div" variant="h4" sx={{pl:4,py:2}} Wrap>
          Witness the incredible success stories of the amazing souls we save
          </Typography>
        </CardContent>
      </Box>
      <CardContent sx={{ width: 700,flex:1,my:6 }}>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{px:4,py:2}}>
          The most satisfying experience feeling is witnessing the transformation of sick and injured animals. Seeing them go from horrific injuries to a happy playful soul is what keeps us motivated to work for the betterment of these stray animals. We provide the medical treatment to recover, and the love and care to thrive. 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{px:4,py:2}}>
          We encourage the community to protect all animals' lives by sharing the incredible stories of recovery and healing.
          </Typography>
      </CardContent>
      </Card>
      <RightCard maintext="Meet Shiro, our One Happy Dog!" secondtext="Last year, because of person's careless driving, Shiro lost one of her hind legs. It had to be amputated. After weeks of consistent rest, care and medications, she stood up again. 
Recently, someone crushed her only hope to walk - her other hind leg broken. After a bone-pinning orthopaedic surgery, she is now in the recovery phase and within a couple of months, she will be all set to explore, play and enjoy the world again" pic={shiro}/>

<LeftCard maintext="The One-Eyed Hawkeye" secondtext="A victim of physical abuse, Bade Thakur was on the verge of dying due to beating by some of the demons of our society. His open wounds had become a feast for maggots who were eating him alive. We rushed him to the vet where he was given proper treatment. Unfortunately, we couldn't save his right eye. 
After months of treatment, care, dressing and medication, now he is rejoicing, playing and enjoying life every day." pic={bt}/>
<RightCard maintext="The Three Musketeers" secondtext="Three puppies got stuck under a narrow pavement of a building and needed immediate help. We had to break the pavement in order to rescue them. Seeing the efforts, some of the people of the locality also came to lend a helping hand. 
We managed to break through and rescue the three siblings. They were reunited with their family. All three of them later got adopted and are now live happily ever after." pic={three}/>
      <Background text="Happy Adopters…" pic={ad0}/>
      <Album />
      <Footer/>
    </>
  )
}

export default Sstory