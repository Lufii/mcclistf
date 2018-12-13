import React, { Component } from 'react';
import StudentCard from './StudentCard.js';


class StudentsList extends Component {

/*  constructor(props){
      super(props);
      this.state = {
        jsonres: null
      };
    }

    handleJSON(){
      let res = axios({
        method:'GET',
        url:'http://localhost:72/students',
      }).then(function (response){
        console.log(response);
        if(response.status === 200){
        //self2.sayChange(self.name+' add successful');
        return response;
      }}).catch(function (error){
        console.log(error);
        //self2.sayChange(self.name+' add unsuccessful.');
      });
      this.setState({jsonres: res});
    }
  */

  render() {
    return (
      <div className="studentsList">
    {Object.values(this.props.jsonList).map(function(object, i){
      return <StudentCard name={object.name} lastname={object.lastname} birthdate={object.birthdate} hobbies={object.hobbies} key={i}/>
    })}
      </div>
    );
  }
}

export default StudentsList;
