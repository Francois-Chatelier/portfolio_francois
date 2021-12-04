import React from 'react';
import './apropos.css';
import portrait from '../images/Francois_Chatelier.jpg';

const Apropos = () => {
  return (
    <div className="positionPhoto">
      <img
        src={portrait}
        alt="Portrait François Chatelier"
        className="portrait"
      />
      <div className="spitch">
        <div className="containerAbout">
          <div className="card">
            <h1 className="entete">Un peu de moi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
