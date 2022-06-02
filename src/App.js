import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Test from './components.js/test';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <Test/>
    </div>
  );
}

export default App;
