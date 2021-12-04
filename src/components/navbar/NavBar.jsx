import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../images/fc-logo.png';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="Logo personnel François Chatelier"
        className="logo"
      />
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onChange={() => setIsMobile(false)}
      >
        <Link to="/" className="accueil">
          <li>Accueil</li>
        </Link>
        <Link to="/portfolio" className="portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/a-propos" className="apropos">
          <li>À propos</li>
        </Link>
        <Link to="/contact" className="contact">
          <li>Contact</li>
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
