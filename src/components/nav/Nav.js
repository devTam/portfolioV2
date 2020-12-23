import React, { useState } from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { withRouter } from "react-router-dom";
import './nav.scss';
import NavDropdown from '../nav-dropdown/NavDropdown';

const Nav = ({ history }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleClick = () => {
    setToggleNav(!toggleNav);
  }

  return (
    <div className="nav">
      <div className="nav__logo-container" onClick={() => history.push("/")}>
          <Logo className="nav__logo"/>
      </div>
      <div className="nav__menu" onClick={handleClick}>
        <h4 className={`nav__menu-item open ${toggleNav && "toggle"}`}>
          menu<span className="nav__menu-dot">.</span>
        </h4>
        <h4 className={`nav__menu-item ${!toggleNav && "close"}`}>
          close<span className="nav__menu-dot">.</span>
        </h4>
      </div>
      {
        toggleNav && <NavDropdown />
      }
    
    </div>
  );
};

export default withRouter(Nav);
