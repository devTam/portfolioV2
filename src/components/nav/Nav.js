import React from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { withRouter } from "react-router-dom";
import './nav.scss';

const Nav = ({ history }) => {
  return (
    <div className="nav">
      <div className="nav__logo-container" onClick={() => history.push("/")}>
          <Logo className="nav__logo"/>
      </div>
      <div className="nav__menu">
        <h4 className="nav__menu-item">
          menu<span className="nav__menu-dot">.</span>
        </h4>
      </div>
    </div>
  );
};

export default withRouter(Nav);
