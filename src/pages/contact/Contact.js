import React, { useEffect } from 'react';
import { undoCanvas } from '../../utils/undoCanvas';
import './contact.scss';
import SocialIcons from '../../components/social-icons/SocialIcons';
import Slider from 'react-slick';

const Contact = () => {
  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 1,
    spped: 3000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    arrows: false,
    cssEase: 'ease-out',
    rtl: true,
    pauseOnHover: false,
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
        <h4 className="contact__desc">
          Feel free to reach out if you are interested in working together or
          just want to talk about fitness or anime 🤭
        </h4>
      <a href="mailto:tammy.batubo@gmail.com" className="contact__btn">Send a message <span>💬</span></a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="contact__waves"
      >
        <path
          fill="#181102"
          fillOpacity=".7"
          d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,122.7C840,171,960,245,1080,261.3C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <SocialIcons />
      <div className="deco"></div>
    </div>
  );
};

export default Contact;
