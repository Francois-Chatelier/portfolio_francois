import React from 'react';
import './titreSite.css';
import avatar from '../images/avatar.png';

const TitreSite = () => {
  return (
    <div className="titre">
      <h1 className="firstname">François</h1>
      <img src={avatar} alt="avatar" />
      <h2 className="lastname">Chatelier</h2>
    </div>
  );
};

export default TitreSite;
