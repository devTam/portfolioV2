import React, { useEffect, useRef } from 'react';
import './homepage.scss';
import { Link } from 'react-router-dom';
import Canvas from '../../components/canvas/Canvas';
import gsap from 'gsap';
import { homepageAnim } from '../../utils/animations';

const HomePage = () => {
  const headerRef = useRef(null);
  const subheaderRef = useRef(null);
  const buttonsRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    homepageAnim(tl, headerRef, subheaderRef, buttonsRef);
    Canvas();
  }, []);
  return (
    <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__title">
          <h1 className="homepage__title-items" ref={headerRef}>
            I create <span>beautiful</span> and <span>performant</span> websites
            & apps with <span>great</span> User experience
          </h1>
        </div>

        <div className="homepage__subtitle">
          <h3 className="homepage__subtitle-items" ref={subheaderRef}>
            Front End developer & UI/UX designer
          </h3>
        </div>

        <div className="homepage__btns" ref={buttonsRef}>
          <Link to="/projects" className="homepage__btn btn-primary">
            View projects
          </Link>
          <Link to="/contact" className="homepage__btn btn-secondary">
            Say hello👋
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
