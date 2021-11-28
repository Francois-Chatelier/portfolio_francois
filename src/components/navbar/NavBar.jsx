/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">LOGO</h3>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="accueil">
          <li>Accueil</li>
        </Link>
        <Link to="/portfolio" className="portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/apropos" className="apropos">
          <li>À propos</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        type="button"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times" />
        ) : (
          <i className="fas fa-bars" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
