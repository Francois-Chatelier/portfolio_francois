import React from 'react';
import './accueilPage.css';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import mer from '../images/mer.jpg';

const PageAccueil = () => {
  return (
    <div>
      <NavBar />
      <div className="photo">
        <div className="grid-intro">
          <h1 className="intro">Bienvenue !</h1>
          <h3 className="presentation">
            Je suis <strong className="name">François Chatelier</strong>,
            Développeur web Junior.
          </h3>
          <div className="react_node">
            <i className="fab fa-react" />
            <i className="fab fa-node" />
          </div>
          <Link to="portfolio" className="btn">
            Entrer
          </Link>
        </div>
        <img className="mer" src={mer} alt="Moi même à la mer" />
      </div>
    </div>
  );
};

export default PageAccueil;
