import React, { Component } from 'react';
import { BrowserRouter,Route ,Switch,NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <NavLink to="/" activeClassName="is-action" exact={true}>Home</NavLink>
                <NavLink to="/portfolio" exact={true} activeClassName="is-action">Porfolio</NavLink>
                <NavLink to="/contact" activeClassName="is-action">Contact</NavLink>
                
            </div>
        );
    }
}

export default Header;