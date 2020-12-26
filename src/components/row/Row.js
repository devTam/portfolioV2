import React from 'react';
import './row.scss';

const Row = ({ image, desc }) => {
  return (
    <div className="row">
      <div className="row__image">
        <img src={image} alt={desc} className="row__mockup" />
      </div>
      <div className="row__content">
        <h2 className="row__title">{desc}</h2>
        <p className="row__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum fugit
          corporis iusto earum quae similique voluptate sit illo tempore.
        </p>
        <div className="row__buttons">
          <a href="" className="row__btn">
            Demo site
          </a>
          <a href="" className="row__btn">
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Row;
