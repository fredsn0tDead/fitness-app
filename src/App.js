import logo from './logo.svg';


import Log from './components/Log';
import { Nav } from './components/Nav';
import { ExcersiseCarousel } from './components/ExcersiseCarousel';
import { Home } from './pages/Home';
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
