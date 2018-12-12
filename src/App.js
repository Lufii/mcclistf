import React, { Component } from 'react';
import './App.css';
import home from './images/home.svg'
import add from './images/add.svg'
import AddStudent from './components/AddStudent.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      page: 'home'
    }
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
        {this.state.page}
          <img src={home} onClick={this.handleHomeButton} className='app-home' alt='See all students' />
          <img src={add} onClick={this.handleAddButton} className='app-add' alt='Add student' />
        </div>
        <AddStudent activePage={this.state.page} />
        </header>
      </div>
    );
  }
}

export default App;
