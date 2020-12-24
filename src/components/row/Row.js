import React from 'react';
import './row.scss';

const Row = ({image, desc}) => {
    return (
        <div className="row">
            <h1>{desc}</h1>
            <img src={image} alt={desc} className="row__mockup"/>
        </div>
    )
}

export default Row
