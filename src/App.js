
import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    document.title = 'Ajay S Rajendran';
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Hero/>
   
    </div>
  );
}

export default App;
