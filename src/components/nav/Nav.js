import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { withRouter } from "react-router-dom";
import './nav.scss';
import NavDropdown from '../nav-dropdown/NavDropdown';

const Nav = ({ history }) => {
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null
  });

  // close menu afterlink is clicked
  useEffect(() => {
   history.listen(() => {
     setState({
      clicked: false
     });
   }) 
  },[history])

  const handleClick = () => {
    disableMenu()
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

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <div className="nav">
      <div className="nav__logo-container" onClick={() => history.push("/")}>
          <Logo className="nav__logo"/>
      </div>
      <button className="nav__menu" onClick={handleClick} disabled={disabled}>
        <h4 className='nav__menu-item open'>
          menu<span className="nav__menu-dot">.</span>
        </h4>
        <h4 className='nav__menu-item close'>
          close<span className="nav__menu-dot">.</span>
        </h4>
      </button>
      <NavDropdown state={state} />
    </div>
  );
};

export default withRouter(Nav);
