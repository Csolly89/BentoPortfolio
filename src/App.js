import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './Components/About';
import Exp from './Components/Exp';
import Projects from './Components/Projects';
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/exp" element={<Exp />} />
          {/* hours of operations in Locations */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


