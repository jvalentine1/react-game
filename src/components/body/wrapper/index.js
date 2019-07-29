/* eslint-disable no-unused-vars */
import React from 'react';
import './wrapper.css';

function Wrapper(props) {
    return (
        <div className="container-fluid bg-color">{props.children}</div>
    )
}

export default Wrapper;