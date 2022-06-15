// import logo from './logo.svg';
import './App.css';
// import { Button } from '@mui/material';
// import Test from './components.js/test';
import Navbar from './components/navbar';
// import { palette } from '@mui/system';
import { Box } from '@mui/material';
import Homepage from './components/homepage';
import LeftCard from './components/leftcard';
import RightCard from './components/rightcard';
import Footer from './components/footer';
import About from './components/about';
import Whatwedo from './components/whatwedo';
import Sstory from './components/sstory';
import Contact_us from './components/contact';
import UpforA from './components/upforadop';
import Terms from './components/terms';


function App() {
  return (
    // <div className="App">
    //   <Button variant="contained">Hello World</Button>
    //   <Test/>
    // </div>
    <Box >
      <Homepage/>
      <About/>
      <Whatwedo/>
      <Sstory/>
      <UpforA/>
      <Contact_us/>
      <Terms/>
    </Box>
  );
}

export default App;
