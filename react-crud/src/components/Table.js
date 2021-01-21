import React, { Component } from 'react';
import axios from 'axios';


const axiosLiferay = axios.create({
	baseURL: '/api/jsonws',
	timeout: 15000,
	auth: {
	    username: 'test@liferay.com',	//'service.user@liferay.com',
	    password: 'test'
	},
	headers: {'Content-Type': 'application/json'}
});

class Table extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            persons:this.props.list
        }
        
    }


    

   
    render(props) {
        return (
            <div>
            <table >
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>education</td>
                    <td>email</td>
                </tr>
                {console.log(this.props.list)}

                {

                    
                    this.props.list.map((ele)=>{
                        console.log(ele);
                        return (
                            <tr>
                                
                                <td>{ele.studentId}</td>
                                <td>{ele.name}</td>
                                <td>{ele.education}</td>
                                <td>{ele.email}</td>
                                <td><button onClick={this.props.handleDelete} name="studentId" value={ele.studentId} id={ele.studentId}>delete</button></td>
                
                            </tr>
                            
                
                    );
                  
              }

                       
                    )
                }



            </table>
            </div>
        );
    }
}

export default Table;