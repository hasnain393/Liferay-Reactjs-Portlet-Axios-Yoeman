import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <h1>this is a portfilio page</h1>
                <h1>My work</h1>
                <p>check out the following things ive done:</p>
                <NavLink to="/portfolio/1" >Item one</NavLink>
                <NavLink to="/portfolio/2" >Item two</NavLink>
            </div>
        );
    }
}

export default Portfolio;