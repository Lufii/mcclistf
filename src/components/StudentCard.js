import React, { Component } from 'react';

class StudentCard extends Component {
  render() {
    return (
      <div className="addStudent">
      <p> Name: {this.props.name} </p>
      <p> Last Name: {this.props.lastname} </p>
      <p> Birth Date: {this.props.birthdate} </p>
      <p> Hobbies: {this.props.hobbies} </p>
      </div>
    );
  }
}

export default StudentCard;
