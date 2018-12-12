import React, { Component } from 'react';

class AddStudent extends Component {

  render() {
    if(this.props.activePage==='add')
    return (
      <div className="addStudent">
        <form>
        <input type='text' placeholder='Name' /> <br/>
        <input type='text' placeholder='Last Name' /> <br/>
        <input type='text' placeholder='Birth Date' /> <br/>
        <input type='text' placeholder='Hobbies' /> <br/>
        <input type='submit' value='Add' />
        </form>
      </div>
    );
    else return null;
  }
}

export default AddStudent;
