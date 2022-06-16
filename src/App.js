// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './components/homepage';
import About from './components/about';
import Whatwedo from './components/whatwedo';
import Sstory from './components/sstory';
import Contact_us from './components/contact';
import UpforA from './components/upforadop';
import Terms from './components/terms';
import Privacy from './components/privacy';
import RefundP from './components/randcp';
import Donate from './components/donate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="/whatwedo" element={<Whatwedo/>}/>
        <Route path="/sstories" element={<Sstory/>}/>
        <Route path="/upforadop" element={<UpforA/>}/>
        <Route path="/contact" element={<Contact_us/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/refundpolicies" element={<RefundP/>}/>
        <Route path="/donate" element={<Donate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
