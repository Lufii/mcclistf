import React, { Component } from 'react';
import StudentCard from './StudentCard.js';
const axios = require('axios');

class StudentsList extends Component {

  constructor(props){
    super(props);
    this.state={
      jsonres: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:72/students')
      .then(({ data })=> {
        console.log(data);
        this.setState(
          { jsonres: data }
        );
      })
      .catch((err)=> {})
    }

  componentDidUpdate() {
      axios
        .get('http://localhost:72/students')
        .then(({ data })=> {
          console.log(data);
          this.setState(
            { jsonres: data }
          );
        })
        .catch((err)=> {})
    }
  

  render() {
    if (this.props.activePage==='home')
    return (
      <div className="studentsList">
    {this.state.jsonres.map(function(object, i){
      return <StudentCard name={object.name} lastname={object.lastname} birthdate={object.birthdate} hobbies={object.hobbies} key={i}/>
    })}
      </div>
    );
    else return null;
  }
}

export default StudentsList;
