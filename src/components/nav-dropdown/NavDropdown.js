import React, { useEffect, useRef } from 'react';
import './nav-dropdown.scss';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import Resume from '../../assets/TammyBatuboResume.pdf';

const NavDropdown = ({ state }) => {
  const dropdownRef = useRef(null);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const iconsRef = useRef(null);
  useEffect(() => {
    const closeMenu = gsap.timeline();
    const openMenu = gsap.timeline();
    if (state.clicked === false) {
      closeMenu
        .to(
          iconsRef.current,
          {
            duration: 0.3,
            ease: 'power3.in',
            opacity: 0,
            y: 20,
          },
          '-=.2'
        )
        .to(
          [
            linkRef4.current,
            linkRef3.current,
            linkRef2.current,
            linkRef1.current,
          ],
          {
            y: 100,
            duration: 0.5,
            ease: 'circ.in',
            stagger: 0.1,
          }
        )
        .to(
          dropdownRef.current,
          {
            duration: 0.8,
            height: 0,
            ease: 'power3.inOut',
          },
          '-=.5'
        )
        .to(dropdownRef.current, {
          duration: 1,
          css: { display: 'none' },
        });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      openMenu
        .to(dropdownRef.current, {
          duration: 0,
          css: { display: 'block' },
        })
        .to(dropdownRef.current, {
          duration: 0,
          opacity: 1,
          height: '100vh',
        })
        .from(dropdownRef.current, {
          duration: 0.8,
          height: 0,
          transformOrigin: 'right top',
          skewY: 2,
          ease: 'power3.inOut',
        })
        .fromTo(
          [
            linkRef1.current,
            linkRef2.current,
            linkRef3.current,
            linkRef4.current,
          ],
          {
            y: 100,
            duration: 0.5,
            ease: 'circ.out',
            stagger: 0.1,
          },
          {
            y: 0,
          },
          '-=.5'
        )
        .fromTo(
          iconsRef.current,
          {
            duration: 0.5,
            ease: 'circ.out',
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          }
        );
    }
  }, [state]);

  // const showMenuAnim = (menu) => {

  // }

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
      {/* <div className="nav-dropdown__waves">
        <Wave className="wave-bottom"/>
      </div> */}
    </div>
  );
};

export default NavDropdown;
