import logo from './logo.svg';
import { Route, Routes ,BrowserRouter} from 'react-router-dom';


import Log from './components/Log';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import SlideCarousel from './components/Carousel/SlideCarousel';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Slide } from '@mui/material';
function App() {
  return (
    <div>
      <Nav/>{/* placed the nav bar at top to be outted on each page */}
    <Routes>
   
     <Route  path="/" element={<SlideCarousel/> }/>
    
      <Route exact path="/login" element= {<Login/>}/> 
      <Route exact path="/signup" element= {<SignUp/>}/>
      
      </Routes>

    </div>
   
    
  );
}

export default App;
