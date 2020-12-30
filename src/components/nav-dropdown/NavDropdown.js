import React, { useEffect, useRef } from 'react';
import './nav-dropdown.scss';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import Resume from '../../assets/TammyBatuboResume.pdf';
import { closeNavAnim, openNavAnim } from '../../utils/animations';

const NavDropdown = ({ state }) => {
  const dropdownRef = useRef(null);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const iconsRef = useRef(null);

  // Gsap timelines
  const closeMenu = gsap.timeline();
  const openMenu = gsap.timeline();
  const menu = gsap.timeline();

  useEffect(() => {
    if (state.clicked === false) {

      closeNavAnim(
        closeMenu,
        linkRef4,
        linkRef3,
        linkRef2,
        linkRef1,
        dropdownRef,
        iconsRef
      );
      const menu = gsap.timeline()
      menu.to('.close', {
        duration: 0,
        delay: .5,
        top: '-100%',
        ease: 'power3.inOut',
      })
      .to('.open', {
        duration: 0,
        top: 0,
        ease: 'power3.inOut',
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      

      menu.to('.open', {
        duration: 0,
        top: '100%',
        ease: 'power3.inOut',
      })
      .to('.close', {
        duration: 0,
        top: 0,
        ease: 'power3.inOut',
      })
    
      openNavAnim(
        openMenu,
        linkRef4,
        linkRef3,
        linkRef2,
        linkRef1,
        dropdownRef,
        iconsRef
      );
    }
  }, [state, closeMenu, openMenu, menu]);

  return (
    <div className="nav-dropdown" ref={dropdownRef}>
      <div className="nav-dropdown__content">
        <div className="nav-links">
          <div className="nav-item-container">
            <NavLink
              activeClassName="active"
              className="nav-item"
              exact
              to="/"
              ref={linkRef1}
            >
              Home
            </NavLink>
          </div>
          <div className="nav-item-container">
            <NavLink className="nav-item" to="/projects" ref={linkRef2}>
              Projects
            </NavLink>
          </div>
          <div className="nav-item-container">
            <NavLink className="nav-item" to="/contact" ref={linkRef3}>
              Contact
            </NavLink>
          </div>
          <div className="nav-item-container">
            <a
              href={Resume}
              className="nav-item"
              download="TammyBatuboResume"
              ref={linkRef4}
            >
              <i className="fas fa-file-download"></i>
              Resume
            </a>
          </div>
        </div>
        <div className="nav-socials">
          <div className="nav-icons-container" ref={iconsRef}>
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
    </div>
  );
};

export default React.memo(NavDropdown);
