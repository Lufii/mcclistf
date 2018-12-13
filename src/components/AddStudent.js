import React, { Component } from 'react';
const axios = require('axios');

class AddStudent extends Component {
  constructor(props){
      super(props);
      this.state = {
        name:'',
        lastname:'',
        birthdate:'',
        hobbies: ''
      };
      //Below, state updaters for each field.
      this.handleName = this.handleName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleBirthDate = this.handleBirthDate.bind(this);
      this.handleHobbies = this.handleHobbies.bind(this);


      this.handleAdd = this.handleAdd.bind(this);
    }
    handleName(event){
      this.setState({name: event.target.value});
    }

    handleLastName(event){
      this.setState({lastname: event.target.value});
    }

    handleBirthDate(event){
      this.setState({birthdate: event.target.value});
    }

    handleHobbies(event){
      this.setState({hobbies: event.target.value});
    }

    handleAdd(event){
      event.preventDefault();
      var self = this.state;
      //var self2 = this.props;
      //self2.sayChange('Loading...');
      axios({
        method:'POST',
        url:'http://localhost:72/student/add',
        data:{
          name: self.name,
          lastname: self.lastname,
          birthdate: self.birthdate,
          hobbies: self.hobbies,
        },
      }).then(function (response){
        console.log(response);
        if(response.status === 200){
        //self2.sayChange(self.name+' add successful');
        return response;
      }}).catch(function (error){
        console.log(error);
        //self2.sayChange(self.name+' add unsuccessful.');
        console.log(self.say);
      })
    }

  render() {
    if(this.props.activePage==='add')
    return (
      <div className="addStudent">
        <form onSubmit={this.handleAdd}>
        <input type='text' placeholder='Name' value={this.state.name} onChange={this.handleName} /> <br/>
        <input type='text' placeholder='Last Name' value={this.state.lastname} onChange={this.handleLastName} /> <br/>
        <input type='text' placeholder='Birth Date' value={this.state.birthdate} onChange={this.handleBirthDate} /> <br/>
        <input type='text' placeholder='Hobbies' value={this.state.hobbies} onChange={this.handleHobbies} /> <br/>
        <input type='submit' value='Add' />
        </form>
      </div>
    );
    else return null;
  }
}

export default AddStudent;
