import React, { useEffect, useRef } from 'react';
import './socialIcons.scss';
import gsap from 'gsap';

const SocialIcons = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);

  useEffect(() => {
    gsap.from([link3.current, link2.current, link1.current], {
      opacity: 0,
      y: -80,
      delay: 1,
      ease: 'bounce.out',
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="projects__socials">
      <a
        href="https://www.linkedin.com/in/tammy-batubo-4023b6119/"
        className="projects-icons"
        id="icon1"
        target="_blank"
        rel="noreferrer"
        ref={link1}
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://twitter.com/dev_TamB"
        className="projects-icons"
        id="icon2"
        target="_blank"
        rel="noreferrer"
        ref={link2}
      >
        <i className="fab fa-twitter-square"></i>
      </a>
      <a
        href="mailto:tammy.batubo@gmail.com"
        className="projects-icons"
        id="icon3"
        ref={link3}
      >
        <i className="fab fa-google-plus-square"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
