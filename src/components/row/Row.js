import React from 'react';
import './row.scss';

const Row = ({ image, name, desc, demo, github, displayRight, nogithub }) => {
  return (
    <div className="row">
      <div className={`row__image ${displayRight && 'display-right'}`}>
        <img src={image} alt={name} className="row__mockup" />
      </div>
      <div className={`row__content ${displayRight && 'display-right'}`}>
        <h2 className="row__title">{name}</h2>
        <p className="row__desc">{desc}</p>
        <div className="row__buttons">
          <a href={demo} className="row__btn" target="_blank" rel="noreferrer">
            Visit website
          </a>
          {
            !nogithub &&
          <a href={github} className="row__btn" target="_blank" rel="noreferrer">
            View on Github
          </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Row;
