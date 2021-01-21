
import React, { useState } from 'react';
import axios from 'axios';
import Table from './Table'
import AddStudentForm from './AddStudentForm'
// import axiosLiferay from './axiosLiferay';

const axiosLiferay = axios.create({
	baseURL: '/api/jsonws',
	timeout: 15000,
	auth: {
	    username: 'test@liferay.com',	//'service.user@liferay.com',
	    password: 'test'
	},
	headers: {'Content-Type': 'application/json'}
});



class GetUser extends React.Component {
    constructor(props, context) {
        super(props, context);
       this.state = {
            persons: []
          }
          this.handleDelete=this.handleDelete.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
          
    }
    
     
  
    handleDelete(event){
    console.log("btn is clicked");
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    axiosLiferay.delete(`/foo.student/delete-student?studentId=${event.target.value}`)
    .then(res => {
          console.log(res);


          return axiosLiferay.get(`/foo.student/get-all-students`)
      }).then(res => {
        console.log(res);
      const result = res.data;
      console.log("after dekete =",result);

      this.setState(()=>{
          return{
              persons:result
          }
      });
    }).catch(()=>{
          console.log("inside catch");
      })
  }


  handleSubmit(event){
    console.log("allla allllooooooo chineseeeeee ahlllo");
    event.preventDefault();
    console.log("form submiited");
    console.log(event.target);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.education.value);
    const studentObj={
      "education":event.target.education.value,
      "email":event.target.email.value,
      "name":event.target.name.value
    }
    
    console.log("constructed obj",studentObj);

    
    var student = JSON.stringify(studentObj);
    console.log("stringify",student);

    var formData = new FormData();
    formData.append("student", student);
    axiosLiferay({
      method: 'post',
      url: 'http://localhost:8080/api/jsonws/foo.student/add-student',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
          return axiosLiferay.get(`/foo.student/get-all-students`)

      })
      .then(res => {
        console.log(res);
      const result = res.data;
      console.log("after adding get new added data =",result);
      //clearing the input fields
      this.setState(()=>{
          return{
              persons:result
          }
      });
    })
      .catch(function (response) {
          //handle error
          console.log(response);
      });

  }
  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
	  
	  
    axiosLiferay.get(`/foo.student/get-all-students`)
    .then(res => {
          console.log("getuser =======",res);
        const persons = res.data;

        this.setState({ persons });
      }).catch(()=>{
          console.log("inside catch");
      }
      )
  }
  render() {
    return (
      <div>
    <p>List ARE: </p>
                {
                <Table handleDelete={this.handleDelete} handleSubmit={this.handleSubmit} list={this.state.persons} />
        }
        <AddStudentForm  handleSubmit={this.handleSubmit} />
    
      </div>
    )
  }
  
  }


export default GetUser