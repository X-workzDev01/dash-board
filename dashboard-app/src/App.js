import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogoAnimation from './components/LogoAnimation';
import WhyXworkz from './components/WhyXworkz';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#000', textAlign: 'center' }}>
        <Link to="/" style={{ margin: '0 15px', color: '#fff' }}>Home</Link>
        <Link to="/why-xworkz" style={{ margin: '0 15px', color: '#fff' }}>Why X-Workz</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LogoAnimation />} />
        <Route path="/why-xworkz" element={<WhyXworkz />} />
      </Routes>
    </Router>
  );
}

export default App;
