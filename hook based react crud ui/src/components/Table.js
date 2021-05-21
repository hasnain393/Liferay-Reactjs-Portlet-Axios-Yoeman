import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const axiosLiferay = axios.create({
	baseURL: '/api/jsonws',
	timeout: 15000,
	auth: {
	    username: 'test@liferay.com',	//'service.user@liferay.com',
	    password: 'test'
	},
	headers: {'Content-Type': 'application/json'}
});

class TableDisplay extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            persons:this.props.list
        }
        
    }


    

   
    render(props) {
        return (
            <div>
            <Table  striped bordered hover>
            <thead>
                <tr>
                     <th>id</th>
                     <th>name</th>
                     <th>education</th>
                     <th>email</th>
                     <th>Action</th>
                </tr>
                </thead>
                <tbody>
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
                                <td>
                                <Button variant="outline-danger" onClick={this.props.handleDelete} name="studentId" value={ele.studentId} id={ele.studentId}>delete
                                    </Button>
                                    </td>
                
                            </tr>
                            
                
                    );
                  
              }

                       
                    )
                }

</tbody>
</Table>
            </div>
        );
    }
}

export default TableDisplay;