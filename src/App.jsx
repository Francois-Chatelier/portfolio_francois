import './app.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAccueil from './components/accueil/AccueilPage';
import Portfolio from './components/portfolio/Portfolio';
import Apropos from './components/apropos/Apropos';
import Contact from './components/contact/Contact';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
