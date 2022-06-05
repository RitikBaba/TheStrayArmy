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


function App() {
  return (
    // <div className="App">
    //   <Button variant="contained">Hello World</Button>
    //   <Test/>
    // </div>
    <Box >
      <Navbar />
      <Homepage/>
      <LeftCard/>
      <RightCard/>
      <LeftCard/>
      <RightCard/>
    </Box>
  );
}

export default App;
