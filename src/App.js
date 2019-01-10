import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddNewGamer from './AddNewGamer'
import GamerList from './GamerList'

class App extends Component {

  state = {
    gamers: [],
  };


handleAddGamer = (nome, sobrenome, ngames) => {
    this.setState(prevState => ({ gamers: [...prevState.gamers, { nome, sobrenome, ngames }] }));
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
          <GamerList gamers={this.state.gamers}/>  
        </div>
      </div>
    );
  }
}
export default App;