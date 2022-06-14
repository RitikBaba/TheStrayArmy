import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Typography from '@mui/material/Typography';
import cover from './images/cover.jpg';

function LeftCard(props) {

  return (
    <Card sx={{ display: 'flex', m:4, alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1.2, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h3">
            {props.maintext}
          </Typography>
          <br />
          <Typography variant="h6" color="text.secondary" component="div">
            {props.secondtext}
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="contained" color="error" endIcon={<VolunteerActivismTwoToneIcon sx={{ fontSize: 100, alignItems: 'center' }}/>}>
                Donate
            </Button>
        </Box> */}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300,flex:1  }}
        image= {props.pic}
        alt="Live from space album cover"
      />
    </Card>
  );
}
export default LeftCard;
