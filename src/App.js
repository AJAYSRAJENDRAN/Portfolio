
import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';


function App() {
  useEffect(() => {
    document.title = 'Ajay S Rajendran';
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Hero/>
      {/* <Navbar/> */}
     
   
    </div>
  );
}

export default App;
