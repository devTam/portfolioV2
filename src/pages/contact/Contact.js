import React, { useEffect } from 'react';
import { undoCanvas } from '../../utils/undoCanvas';
import './contact.scss';
import SocialIcons from '../../components/social-icons/SocialIcons';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Contact = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    arrows: false,
    cssEase: "cubic-bezier(.83,-0.08,.85,.85)",
    rtl: true
  };
  useEffect(() => {
    undoCanvas();
  }, []);
  return (
    <div className="contact">
      <div className="contact__container">
        <h1 className="contact__title">
          HAVE A
          <div className="slider__container">
            <Slider {...settings}>
              <span className="swap">
                QUESTION<span className="colored">?</span>
              </span>
              <span className="swap">
                PROJECT<span className="colored">?</span>
              </span>
              <span className="swap">
                NICE DAY<span className="colored">.</span>
              </span>
            </Slider>
          </div>
        </h1>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Contact;
