import logo from './logo.svg';
import './App.css';

import Log from './components/Log';
import { Nav } from './components/Nav';
import { ExcersiseCarousel } from './components/ExcersiseCarousel';
import { Home } from './components/Home';
import SlideCarousel from './components/Carousel/SlideCarousel';
function App() {
  return (
    <div>
      <Nav/>
     
       <SlideCarousel/>

    </div>
   
    
  );
}

export default App;
