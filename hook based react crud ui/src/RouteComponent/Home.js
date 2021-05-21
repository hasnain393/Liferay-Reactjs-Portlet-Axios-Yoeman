import React, { Component } from 'react';
import { BrowserRouter,Route ,Switch,Link} from "react-router-dom";

class Home extends Component {
    componentDidMount(){
        console.log("did mount");
        debugger;
    }
    componentWillUnmount(){
        console.log("will unmount");
        debugger;
    }
    render() {
        return (
            <div>
                
                <h1>dashboard /home of this app</h1>
                <Link to="/form"  >Form</Link>
            </div>
        );
    }
}

export default Home;