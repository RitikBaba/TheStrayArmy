import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { Icon } from '@mui/material';

// const pages = [
//   { 
//     name:'Facebook',
//     link: '#',
//     icon: {FacebookIcon}
//   },
//   { 
//     name:'Instagram',
//     link: '#',
//     icon: {InstagramIcon}
//   },
//   { 
//     name:'Twitter',
//     link: '#',
//     icon: {TwitterIcon}
//   },
//   ];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        The Stray Army 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box >
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'center' }}>
              <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<FacebookIcon/>}
              >
                Facebook
              </Button>
              <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<InstagramIcon/>}
              >
                Instagram
              </Button>
              <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<TwitterIcon/>}
              >
                Twitter
              </Button>
          </Box>
        <Copyright />
      </Box>
    </Box>
  );
}
export default Footer;