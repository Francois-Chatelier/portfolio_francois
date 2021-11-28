import './app.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAccueil from './components/accueil/AccueilPage';
import Portfolio from './components/portfolio/Portfolio';
import Apropos from './components/apropos/Apropos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/a-propos" element={<Apropos />} />
      </Routes>
    </div>
  );
}

export default App;
