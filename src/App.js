import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import About from './Components/About';
import Exp from './Components/Exp';
import Projects from './Components/Projects';
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Bento from "./Components/Bento"
import Bg from "./assets/blurry-gradient-haikei.png"

function App() {
  const [homeUrl, setHomeUrl] = useState("/");

  useEffect(() => {
    setHomeUrl(window.location.pathname);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/exp" element={<Exp />} />
          {/* hours of operations in Locations */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* make if statement for hidden display if the link is anything other than / "home" */}
      { homeUrl !== "/" 
      ? null
      : (<div className="text-[#fffbfe]">
      <img className="w-full h-full sticky -z-10 top-0 object-fill" src={Bg} alt="gradient background" />
      <section className="absolute top-0 w-full"> <Hero /> </section>
      <section className="pb-28 mt-28" > <Bento /> </section>
    </div>) 
      }
    </Router>
  );
}

export default App;


