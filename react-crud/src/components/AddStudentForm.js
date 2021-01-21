

import React, { Component } from 'react';

class AddStudentForm extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        return (
            <div>
                <h1>Add Student Form</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Enter name:</label>
                     <input name="name" ></input>
                    <label>Enter email:</label>
                    <input name="email"></input>
                    <label>Enter education:</label>
                    <input name="education"></input>
                    <button >Submit</button>
                </form>
                
            </div>
        );
    }
}

export default AddStudentForm;