import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../images/fc-logo.png';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="Logo personnel François Chatelier"
          className="logo"
        />
      </Link>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onChange={() => setIsMobile(false)}
      >
        <Link to="/" className="menu">
          <li>Accueil</li>
        </Link>
        <Link to="/portfolio" className="menu">
          <li>Portfolio</li>
        </Link>
        <Link to="/a-propos" className="menu">
          <li>À propos</li>
        </Link>
        <Link to="/contact" className="menu">
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
