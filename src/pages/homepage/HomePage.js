import React, { useEffect } from 'react';
import './homepage.scss';
import { Link } from 'react-router-dom';
import Canvas from '../../components/canvas/Canvas'

const HomePage = () => {

    useEffect(() => {
        Canvas();
    }, [])
  return (
    <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__title">
          <h1 className="homepage__title-items">
            I create <span>beautiful</span> and <span>performant</span> websites
            & apps with <span>great</span> User experience
          </h1>
        </div>

        <div className="homepage__subtitle">
          <h3 className="homepage__subtitle-items">
            Front End developer & UI/UX designer
          </h3>
        </div>

        <div className="homepage__btns">
          <Link to="/projects" className="homepage__btn btn-primary">
            View projects
          </Link>
          <Link to="/contact" className="homepage__btn btn-secondary">
            Say hello👋
          </Link>
        </div>
      </div>
      {/* <div className="blobs">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob">
          <path
            fill="rgba(38, 26, 1, 0.4)"
            d="M30.8,-53.2C42,-46.8,54.5,-42.8,64,-34.3C73.4,-25.8,79.6,-12.9,81.1,0.8C82.5,14.6,79.1,29.2,69.7,37.6C60.2,46,44.7,48.3,32.1,52C19.5,55.8,9.7,60.9,-0.7,62.1C-11,63.2,-22.1,60.3,-33.5,55.9C-45,51.5,-56.8,45.6,-60.6,36C-64.5,26.4,-60.3,13.2,-59.1,0.7C-58,-11.9,-59.9,-23.8,-57.7,-36.3C-55.6,-48.8,-49.5,-61.9,-39.2,-68.8C-28.9,-75.7,-14.4,-76.4,-2.3,-72.4C9.8,-68.3,19.6,-59.6,30.8,-53.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default HomePage;
