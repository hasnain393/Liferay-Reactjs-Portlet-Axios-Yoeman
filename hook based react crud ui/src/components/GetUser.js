
import React, { useState } from 'react';
import axios from 'axios';
import TableDisplay from './Table'
import AddStudentForm from './AddStudentForm'
import Spinner from 'react-bootstrap/Spinner'
import {LinearProgress} from "@material-ui/core";
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
            isloading:true,
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


  handleSubmit(studentObj){
    console.log("allla allllooooooo chineseeeeee ahlllo");
    // event.preventDefault();
    // console.log("form submiited");
    // console.log(event.target);
    // console.log(event.target.name.value);
    // console.log(event.target.email.value);
    // console.log(event.target.education.value);
    // const studentObj={
    //   "education":event.target.education.value,
    //   "email":event.target.email.value,
    //   "name":event.target.name.value
    // }
    
    console.log("inside get user ");
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

    setTimeout(() => {


      axiosLiferay.get(`/foo.student/get-all-students`)
      .then(res => {
          console.log("getuser =======",res);
        const persons = res.data;
        this.setState({isloading:false})
        this.setState({ persons });

      })
      .catch(()=>{
          console.log("inside catch");
      }
      )
     
    }, 5000);
	  
	  
    


  }
  render() {
    return (
      <div>
    <p>List ARE: </p>
    {
      console.log(this.state.persons.length)
    }
    {
      console.log(this.state.persons.length>0)
    }
  {
    this.state.isloading && 
    
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>

  //or  (Spinner or loading bar)
  // <LinearProgress />
  }
    {
      this.state.persons.length>0 ? (
      
    <TableDisplay handleDelete={this.handleDelete} handleSubmit={this.handleSubmit} list={this.state.persons} />
      ):(
        <h1>No data in table</h1>
        )
    }
               

        <AddStudentForm  handleSubmit={this.handleSubmit} />
    
      </div>
    )
  }
  
  }


export default GetUser