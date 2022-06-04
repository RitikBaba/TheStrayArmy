// import logo from './logo.svg';
import './App.css';
// import { Button } from '@mui/material';
// import Test from './components.js/test';
import Navbar from './components/navbar';
// import { palette } from '@mui/system';
import { Box } from '@mui/material';
import Homepage from './components/homepage';


function App() {
  return (
    // <div className="App">
    //   <Button variant="contained">Hello World</Button>
    //   <Test/>
    // </div>
    <Box >
      <Navbar />
      <Homepage/>
    </Box>
  );
}

export default App;
