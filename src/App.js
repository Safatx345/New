import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';

function App() {
  const [homeVisits, setHomeVisits] = useState(0);

  useEffect(() => {
    const visits = Number(localStorage.getItem('homeVisits') || 0);
    localStorage.setItem('homeVisits', visits + 1);
    setHomeVisits(visits + 1);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage visits={homeVisits} />} />
        <Route path="/about" element={<AboutPage visits={homeVisits} />} />
        <Route path="/contact" element={<ContactPage visits={homeVisits} />} />
      </Routes>
    </Router>
  );
}

export default App;
