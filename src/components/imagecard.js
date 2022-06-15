import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ad1 from './images/adp1.jpg';
import ad2 from './images/adp2.jpg';
import ad3 from './images/adp3.jpg';
import ad4 from './images/adp4.jpg';
import ad5 from './images/adp5.jpg';
import ad6 from './images/adp6.jpg';
import ad7 from './images/adp7.jpg';
import ad8 from './images/adp8.jpg';
import ad9 from './images/adp9.jpg';
import ad10 from './images/adp10.jpg';
import ad11 from './images/adp11.jpg';
import ad12 from './images/adp12.jpg';



const theme = createTheme();
// console.log(itemData);

export default function Album() {
  return (
    <>
       <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad1}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad2}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad3}
                    alt="random"
                    height={400}
            />
        </CardContent>
        
      </Box>
      </Card>
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad4}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad5}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad6}
                    alt="random"
                    height={400}
            />
        </CardContent>
        
      </Box>
      </Card>
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad7}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad8}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad9}
                    alt="random"
                    height={400}
            />
        </CardContent>
        
      </Box>
      </Card>
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad10}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad11}
                    alt="random"
                    height={400}
            />
        </CardContent>
        <CardContent >
            <CardMedia
                    component="img"
                    image={ad12}
                    alt="random"
                    height={400}
            />
        </CardContent>
        
      </Box>
      </Card>
     </>
  );
}