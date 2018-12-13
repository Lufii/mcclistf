import React, { Component } from 'react';
import './App.css';
import home from './images/home.svg'
import add from './images/add.svg'
import AddStudent from './components/AddStudent.js'
import StudentsList from './components/StudentsList.js'
const axios = require('axios');

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      page: 'home',
      array: []
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:72/students')
      .then(({ data })=> {
        console.log(data);
        this.setState(
          { array: data }
        );
      })
      .catch((err)=> {})
    }

  handleHomeButton = () =>{
    this.setState({page: 'home'})
  }

  handleAddButton = () =>{
    this.setState({page: 'add'})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <div id='menu'>
          <img src={home} onClick={this.handleHomeButton} className='app-home' alt='See all students' />
          <img src={add} onClick={this.handleAddButton} className='app-add' alt='Add student' />
        </div>
        <AddStudent activePage={this.state.page} />
        <StudentsList activePage={this.state.page} />

{/* test stuff

  {this.state.page}

        <StudentCard name='cyry' lastname='didi' birthdate='caca' hobbies='sss' />
        <StudentsList jsonList={[
        {
        _id: "5c0ff3fe84ea332db833e155",
        name: "Dani",
        lastname: "Achim",
        birthdate: "29 April",
        hobbies: "Skiing"
        },
        {
        _id: "5c115b5ebd45752b389b20c5",
        name: "dada",
        lastname: "qq",
        birthdate: "qqq",
        hobbies: "www"
        },
        {
        _id: "5c11cb16bd45752b389b20c6",
        name: "didu",
        lastname: "radu",
        birthdate: "nustiu",
        hobbies: "ski"
        }
        ]} />
test stuff end */}

        </header>
      </div>
    );
  }
}

export default App;
