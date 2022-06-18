import React from "react";
import { Box } from "@mui/material";
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import donateimg from './images/donate.jpg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import cover from './images/cover.jpg';
// import { Button } from '@mui/material';
import Navbar from "./navbar";
import Footer from "./footer";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import TitlebarImageList from "./image_with_name";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import UpforA from "./upforadop";
import EmailIcon from '@mui/icons-material/Email';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



function Donate() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                Donate
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between',boxShadow: 'none'}}>
        <CardMedia
            component="img"
            sx={{ height: 500,flex:1.4 }}
            image= {donateimg}
            alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center',justifyContent: 'center' }}>
        <CardContent>
          <Box>
          <Typography variant="h5" color="text.secondary" component="div">
          Your donation ensures that injured and ill ownerless animals are rescued and receive life-saving medical attention. Make your contribution towards a better and safe place for the strays to live peacefully.
          </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
    <CardContent sx={{ width: 750,my:6 ,bgcolor:'#F5F4F4'}}>
          <Typography variant="h4" color="text.secondary" component="div" sx={{px:4,py:1}}>
          You are just a step away from contributing towards humanity!
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:1}}>
          Pledge amount of your choice. Every small help will have a bigger impact!
          </Typography>
          <Box sx={{ width:'100%' , bgcolor: 'background.paper'}}>
          <TabContext value={value}>
              <TabList onChange={handleChange} centered>
                <Tab label="One Time" value="1" />
                <Tab label="Every Month" value="2" />
              </TabList>
              <TabPanel value="1">
                  <Box sx={{display:'flex', alignItems: 'center',flexDirection:'column', justifyContent:'space-evenly'}}>
                    <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:1}}>
                    Pledge an amout towards Humanity
                    </Typography>
                    <FormControl>
                        {/* <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel> */}
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="100" control={<Radio />} label="₹100" />
                          <FormControlLabel value="500" control={<Radio />} label="₹500" />
                          <FormControlLabel value="1000" control={<Radio />} label="₹1,000" />
                          <FormControlLabel value="5000" control={<Radio />} label="₹5,000" />
                          <FormControlLabel value="10000" control={<Radio />} label="₹10,000" />
                        </RadioGroup>
                      </FormControl>
                      <TextField id="fullWidth" label="Others" variant="outlined" type="number"  sx={{ my: 2}}/>
                      <Button variant="outlined" sx={{ my: 2, display: 'block' }}>
                          Pledge Now
                      </Button>
                  </Box>
              </TabPanel>
              <TabPanel value="2" >
              <Box sx={{display:'flex', alignItems: 'center',flexDirection:'column', justifyContent:'space-evenly'}}>
                    <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:1}}>
                    Pledge an amout towards Humanity
                    </Typography>
                    <FormControl>
                        {/* <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel> */}
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="100" control={<Radio />} label="₹100/mon" />
                          <FormControlLabel value="500" control={<Radio />} label="₹500/mon" />
                          <FormControlLabel value="1000" control={<Radio />} label="₹1,000/mon" />
                          <FormControlLabel value="5000" control={<Radio />} label="₹5,000/mon" />
                          <FormControlLabel value="10000" control={<Radio />} label="₹10,000/mon" />
                        </RadioGroup>
                      </FormControl>
                      <TextField id="fullWidth" label="Others" variant="outlined" type="number"  sx={{ my: 2}}/>
                      <Button variant="outlined" sx={{ my: 2, display: 'block' }}>
                          Pledge Now
                      </Button>
                  </Box>
              </TabPanel>
          </TabContext>
          </Box>
          <Box sx={{display:'flex', alignItems: 'center',flexDirection:'column', justifyContent:'space-evenly'}}>
            <Button variant="outlined" target="_blank" href="https://milaap.org/fundraisers/support-the-stray-dogs" sx={{ my: 2, display: 'block' }}>
            Milaap Fundraiser
            </Button>
            <Button variant="outlined" target="_blank" href="https://www.paypal.com/paypalme/thestrayarmy" sx={{ my: 2, display: 'block' }}>
            Paypal
            </Button>
            <Button variant="outlined" target="_blank" href="https://www.patreon.com/thestrayarmy" sx={{ my: 2, display: 'block' }}>
            Patreon
            </Button>
          </Box>
          <Box sx={{display:'flex', alignItems: 'center',flexDirection:'column', justifyContent:'space-evenly'}}>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4}}>
          Paytm / GPay / PhonePe
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4}}>
          9931425381
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,pt:1}}>
          Upi ID
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4}}>
          9931425381@paytm
          </Typography>
          </Box>
      </CardContent>
      </Card>
      <Footer/>
    </>
  )
}

export default Donate