import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <div>
                <h1>showing my art</h1>
                <p>this work {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Work;