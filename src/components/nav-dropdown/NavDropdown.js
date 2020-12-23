import React from 'react';
import './nav-dropdown.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Wave } from "../../assets/wave.svg";

const NavDropdown = () => {
  return (
    <div className="nav-dropdown">
      <div className="nav-dropdown__content">
        <div className="nav-links">
          <div className="nav-item-container">
            <NavLink activeClassName="active" className="nav-item" to="/">
              HOME
            </NavLink>
          </div>
          <div className="nav-item-container">
            <NavLink className="nav-item" to="/projects" exact>
              PROJECTS
            </NavLink>
          </div>
          <div className="nav-item-container">
            <NavLink className="nav-item" to="/contact">
              CONTACT
            </NavLink>
          </div>
          <div className="nav-item-container">
            <a className="nav-item resume" download>
              RESUME
            </a>
          </div>
        </div>
        <div className="nav-socials"></div>
      </div>
      <div className="nav-dropdown__waves">
          <Wave />
      </div>
    </div>
  );
};

export default NavDropdown;
