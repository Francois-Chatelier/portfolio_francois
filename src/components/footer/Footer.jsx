import React from 'react';

// import css
import './footer.css';

const Footer = () => {
  return (
    <footer className="footerContainer">
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
    </footer>
  );
};

export default Footer;
