import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
      <Box sx={{  bgcolor:'#F5F4F4', p: 6 }} component="footer">
        <Typography variant="h5" align="center" sx={{color:'red'}}gutterBottom>
        Every animal deserves a second chance...
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          Working for a cause!
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'center' }}>
              <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<FacebookIcon/>}
                href="https://www.facebook.com/thestrayarmy"
                target="_blank"
              >
                Facebook
              </Button>
              <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<InstagramIcon/>}
                href="https://www.instagram.com/thestrayarmy/"
                target="_blank"
              >
                Instagram
              </Button>
              <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<TwitterIcon/>}
                href="https://twitter.com/thestrayarmy"
                target="_blank"
              >
                Twitter
              </Button>
              <Button
                sx={{ my: 2, color: 'text.secondary', display: 'flex' }}
                startIcon={<YouTubeIcon/>}
                href="https://www.youtube.com/channel/UCCCfd5YG4kOvQFsWPeI3xhA/featured
                "
                target="_blank"
              >
                YouTube
              </Button>
          </Box>
        <Copyright />
      </Box>
    </Box>
  );
}
export default Footer;