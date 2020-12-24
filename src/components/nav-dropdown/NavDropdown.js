import React from 'react';
import './nav-dropdown.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Wave } from '../../assets/wave.svg';
import Resume from '../../assets/TammyBatuboResume.pdf';

const NavDropdown = () => {
  return (
    <div className="nav-dropdown">
      <div className="nav-dropdown__content">
        <div className="nav-links">
          <div className="nav-item-container">
            <NavLink activeClassName="active" className="nav-item" exact to="/">
              Home
            </NavLink>
          </div>
          <div className="nav-item-container">
            <NavLink className="nav-item" to="/projects">
              Projects
            </NavLink>
          </div>
          <div className="nav-item-container">
            <NavLink className="nav-item" to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="nav-item-container">
            <a href={Resume} className="nav-item" download="TammyBatuboResume">
              <i className="fas fa-file-download"></i>
              Resume
            </a>
          </div>
        </div>
        <div className="nav-socials">
          <div className="nav-icons-container">
            <a
              href="https://www.linkedin.com/in/tammy-batubo-4023b6119/"
              className="nav-icons"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <span className="nav-socials__text">Tammy-Batubo</span>
            </a>
            <a
              href="https://twitter.com/dev_TamB"
              className="nav-icons"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter-square"></i>
              <span className="nav-socials__text">@dev_TamB</span>
            </a>
            <a href="mailto:tammy.batubo@gmail.com" className="nav-icons">
              <i className="fab fa-google-plus-square"></i>
              <span className="nav-socials__text">Tammy.batubo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="nav-dropdown__waves">
        <Wave />
      </div>
    </div>
  );
};

export default NavDropdown;
