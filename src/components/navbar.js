import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import mainlogo from './logo.png';
import textpng from './text.png';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import { NavLink,Link } from 'react-router-dom';

// const pages = ['Home', 'About Us', 'What we do', 'Success Stories' , 'Up for Adoption' ,'Contact Us'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  
  return (
    <AppBar position="fixed" sx={{bgcolor: 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ml:4}}>
              <img src={mainlogo} alt="" height={100}/>
              <img src={textpng} alt="" height={85}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            {/* </IconButton>  */}
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' , mx:30 } }}>
            {/* {pages.map((page) => ( */}
              <Button sx={{ my: 2, color: '#2C2F30', display: 'block' }}>
                <NavLink to="/" className='text-link'> Home</NavLink>
              </Button>
              <Button sx={{ my: 2, color: '#2C2F30', display: 'block' }}>
              <NavLink to="/about" className='text-link'> About Us</NavLink>
              </Button>
              <Button sx={{ my: 2, color: '#2C2F30', display: 'block' }}>
              <NavLink to="/whatwedo" className='text-link'> What we do</NavLink>
              </Button>
              <Button sx={{ my: 2, color: '#2C2F30', display: 'block' }}>
              <NavLink to="/sstories" className='text-link'> Success Stories</NavLink>
              </Button>
              <Button sx={{ my: 2, color: '#2C2F30', display: 'block' }}>
              <NavLink to="/upforadop" className='text-link'> Up for Adoption</NavLink>
              </Button>
              <Button sx={{ my: 2, color: '#2C2F30', display: 'block' }}>
              <NavLink to="/contact" className='text-link'> Contact Us</NavLink>
              </Button>
            {/* ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button variant="contained" color="error" endIcon={<VolunteerActivismTwoToneIcon sx={{ fontSize: 100 }}/>}>
            <Link to="/donate" className='text-link'> Donate</Link> 
          </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
