import React, { Component } from 'react';
import deletee from '../images/delete.svg'
const axios = require('axios');

class StudentCard extends Component {

  handleDeleteButton = () =>{
    axios({
      method:'POST',
      url:'http://localhost:72/student/delete',
      data:{
        name: this.props.name,
        lastname: this.props.lastname,
        birthdate: this.props.birthdate,
        hobbies: this.props.hobbies,
      },
    }).then(function (response){
      console.log(response);
      if(response.status === 200){
      return response;
    }}).catch(function (error){
      console.log(error);
    })
  }

  render() {
    return (
      <div className="addStudent">
      <p> Name: {this.props.name} </p>
      <p> Last Name: {this.props.lastname} </p>
      <p> Birth Date: {this.props.birthdate} </p>
      <p> Hobbies: {this.props.hobbies} </p>
      <img src={deletee} className='app-delete' alt='Delete student' onClick={this.handleDeleteButton} />
      </div>
    );
  }
}

export default StudentCard;
