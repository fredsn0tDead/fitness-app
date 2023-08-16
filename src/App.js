import logo from './logo.svg';
import { Route, Routes ,BrowserRouter} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Log from './components/Log';
import { Nav } from './components/Nav';
import { Homepage } from './pages/Homepage';
import SlideCarousel from './components/Carousel/SlideCarousel';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Slide } from '@mui/material';
import { ExcersieLog } from './pages/ExcersieLog';
import { PreviousWorkout } from './pages/PreviousWorkout';
import { Dashboard } from './pages/Dashboard';
import { SignOut } from './pages/SignOut';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
    
  };
  const handleSignOut = () => {
    // Handle sign out logic here

    setIsLoggedIn(false);
  };

  return (
    <div>
      <Nav isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />{/* placed the nav bar at top to be outted on each page */}
    <Routes>
   
     <Route  path="/" element={<Homepage/> }/>
    
      <Route exact path="/login" element= {<Login onLogin={handleLogin}/>}/> 
      <Route exact path="/signup" element= {<SignUp/>}/>
      <Route exact path="/signout" element= {<SignOut/>}/>
      <Route exact path="/exercise-log" element= {<ExcersieLog/>}/>
      <Route exact path ="/previous-workouts" element={<PreviousWorkout/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>

    </div>
   
    
  );
}

export default App;
