import React from 'react';
import './accueilPage.css';
import NavBar from '../navbar/NavBar';
import mer from '../images/mer.jpg';

const PageAccueil = () => {
  return (
    <div>
      <NavBar />
      <div className="photo">
        <img className="mer" src={mer} alt="Moi même à la mer" />
      </div>
    </div>
  );
};

export default PageAccueil;
