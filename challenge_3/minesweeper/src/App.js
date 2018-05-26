import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

class App extends Component {
  constructor(props){
    super(props);
    
  }
  handleClick() {
    console.log('clicked');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Board size={10} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
