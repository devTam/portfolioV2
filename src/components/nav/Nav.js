import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { withRouter } from "react-router-dom";
import './nav.scss';
import NavDropdown from '../nav-dropdown/NavDropdown';

const Nav = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null
  });

  // close menu afterlink is clicked
  useEffect(() => {
   history.listen(() => {
     setState({

     });
   }) 
  },[history])

  const handleClick = () => {
    if(state.initial === false) {
      setState({
        initial: null,
        clicked: true
      })
    }else if(state.clicked === true) {
      setState({
        clicked: !state.clicked
      })
    }else if(state.clicked === false) {
      setState({
        clicked: !state.clicked
      })
    }
  }

  return (
    <div className="nav">
      <div className="nav__logo-container" onClick={() => history.push("/")}>
          <Logo className="nav__logo"/>
      </div>
      <button className="nav__menu" onClick={handleClick}>
        <h4 className={`nav__menu-item open ${state.clicked && "toggle"}`}>
          menu<span className="nav__menu-dot">.</span>
        </h4>
        <h4 className={`nav__menu-item ${!state.clicked && "close"}`}>
          close<span className="nav__menu-dot">.</span>
        </h4>
      </button>
      <NavDropdown state={state} />
    </div>
  );
};

export default withRouter(Nav);
