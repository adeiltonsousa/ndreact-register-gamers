import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewGamer from './AddNewGamer';
import GamerList from './GamerList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.
The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {

  state = {
    gamers: [],
  };

  handleAddGamer = gamer => {
    this.setState(prevState => ({ gamers: [...prevState.gamers, gamer] }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LISTA</ h1>
        </header>
        <div>
          <AddNewGamer onAddGamer={this.handleAddGamer} />
          <GamerList gamers={this.state.gamers} />  
        </div>
      </div>
    );
  }
}
export default App;