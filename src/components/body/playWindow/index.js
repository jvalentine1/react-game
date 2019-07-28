/* eslint-disable no-unused-vars */
import React from 'react';
import './playWindow.css';

function Play (props) {
    return (
        <span>
            <img key={props.id} src={props.src} className="game-img" {...props} alt="game-img"></img>
        </span>
    );
}

export default Play;