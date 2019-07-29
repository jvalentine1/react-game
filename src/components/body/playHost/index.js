/* eslint-disable no-unused-vars */
import React from 'react';
import './playHost.css';

function Host(props) {
    return (
        <div className="container">
            <div className="row play-host">
                <div className="col-md-1"></div>
                <div className="col-md-10 mx-auto img-host" id={props.id}>{props.children}</div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default Host;