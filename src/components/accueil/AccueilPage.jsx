import React from 'react';
import './accueilPage.css';
import { Link } from 'react-router-dom';
import mer from '../images/mer.jpg';

const PageAccueil = () => {
  return (
    <div>
      <div className="photo">
        <div className="grid-intro">
          <h1 className="intro">Bienvenue !</h1>
          <h3 className="presentation">
            Je m&#39;appelle{' '}
            <strong className="name">François Chatelier</strong>, Développeur
            web Junior.
          </h3>
          <div className="react_node">
            <i className="fab fa-react" alt="ReactJS" />
            <i className="fab fa-node" alt="NodeJS" />
          </div>
          <div className="entrer">
            <Link to="portfolio" className="btn">
              Entrer
            </Link>
          </div>
          <div className="reseaux">
            <a
              href="https://www.linkedin.com/in/francois-chatelier/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/Francois-Chatelier"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.facebook.com/francois.chatelier.08"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.instagram.com/francois_chatelier/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <img className="mer" src={mer} alt="Moi même à la mer" />
      </div>
    </div>
  );
};

export default PageAccueil;
