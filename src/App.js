// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slick from './slick'
import Home from './home';
import About from './about'
import Testimonial from './testimonial';
import Demo from './Demo';
import Gallary from './Gallary';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='testimonial' element={<Testimonial/>}/>
      <Route path='slick' element={<Slick/>}/>
      <Route path='demo' element={<Demo/>} />
      <Route path='gallary' element={<Gallary/>} />


     
      
    </Routes>

    </div>
  );
}

export default App;
