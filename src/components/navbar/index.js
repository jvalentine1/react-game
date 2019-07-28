/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './navBar.css';

function Nav(props) {
    return (
        <div className="row myNav">
            <div className="col-md-4 text-center p-3">
                <h1 className="logo">Clicky Game</h1>
            </div>
            <div className="col-md-4 text-center p-3" id={props.id}>
                <h1>{props.status}</h1>
            </div>
            <div className="col-md-4 text-center p-3">
                <h1>Score:{props.score} | Top Score:{props.topScore}</h1>
            </div>
        </div>
    )
}

export default Nav;