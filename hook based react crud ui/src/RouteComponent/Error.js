import React, { Component } from 'react';
import { BrowserRouter,Route ,Switch,Link} from "react-router-dom";

class Error extends Component {
    render() {
        return (
            <div>
                <h1>404! page  not found</h1>
                <Link  to="/" >Home</Link>
            </div>
        );
    }
}

export default Error;