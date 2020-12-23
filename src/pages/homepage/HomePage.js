import React from 'react';
import './homepage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__title">
          <h1 className="homepage__title-items">
            I create beautiful and performant websites & apps with great User
            experience 
          </h1>
        </div>

        <div className="homepage__subtitle">
          <h3 className="homepage__subtitle-items">Front End developer & UI/UX designer</h3>
        </div>

        <div className="homepage__btns">
            <button className="homepage__btn btn-primary">View projects</button>
            <button className="homepage__btn btn-secondary">Say hello👋</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
