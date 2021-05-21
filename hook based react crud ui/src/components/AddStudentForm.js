

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class AddStudentForm extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state={

            name:" dummy text",
            email:"",
            education:""
        }
        this.handleDetails=this.handleDetails.bind(this);
        this.handleOnchange=this.handleOnchange.bind(this);

    }

     handleDetails(event) {
            
        event.preventDefault()
        console.log("details are submittedd ");

        console.log(event.target);
        const studentObj={
            "education":event.target.education.value,
            "email":event.target.email.value,
            "name":event.target.name.value
          }
          this.props.handleSubmit(studentObj);

          this.state.name=""
          this.state.education=""
          this.state.email=""

    }
    
    handleOnchange(event) {
            console.log(event.target);
        const {name,value} =event.target;
        this.setState({
            [name]:value
        })




            //OR
        /* 
        this.setState({
        [event.target.name]: event.target.value
          }); 
          */
        
    }
    render() {
        
        return (
            <div>
                <h1>Add Student Form</h1>

                     <Form onSubmit={this.handleDetails}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter name :</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleOnchange} value={this.state.name}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter email address:</Form.Label>
                        <Form.Control type="email"   name="email" onChange={this.handleOnchange}  value={this.state.email} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEducation">
                        <Form.Label>Enter education address:</Form.Label>
                        <Form.Control type="text"   name="education"  onChange={this.handleOnchange} value={this.state.education}/>
                    </Form.Group>

                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>





{/* 

                <form onSubmit={this.handleDetails}>
                    <label>Enter name:</label>
                     <input name="name" onChange={this.handleOnchange} value={this.state.name} ></input>
                    <label>Enter email:</label>
                    <input name="email" onChange={this.handleOnchange}  value={this.state.email}></input>
                    <label>Enter education:</label>
                    <input name="education"  onChange={this.handleOnchange} value={this.state.education}></input>
                    <button >Submit</button>
                </form> */}
                
            </div>
        );
    }
}

export default AddStudentForm;