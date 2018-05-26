import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

class App extends Component {
  getRand(max) {
    return Math.floor(Math.random() * max)
  }

  constructor(props) {
    super(props);
    this.getRand = this.getRand.bind(this);
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      const row = [];
      for (let j = 0; j < 10; j += 1) {
        row.push([false, false]);
      }
      board.push(row);
    }
    for (let i = 0; i < 10; i += 1) {
      let row = this.getRand(9);
      let col = this.getRand(9);
      while (board[row][col][1] === true) {
        row = this.getRand(9);
        col = this.getRand(9);
      }
      board[row][col][1] = true;
    }
    console.log(board)
    this.state = {
      board: board,
    };
  }

  handleClick(tileLocation) {
    console.log(tileLocation);
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
