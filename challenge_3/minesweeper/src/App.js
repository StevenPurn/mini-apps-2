import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

const surroundingTiles = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

class App extends Component {
  getRand(max) {
    return Math.floor(Math.random() * max)
  }

  constructor(props) {
    super(props);
    this.getRand = this.getRand.bind(this);
    this.handleClick = this.handleClick.bind(this);
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      const row = [];
      for (let j = 0; j < 10; j += 1) {
        row.push({
          revealed: false,
          isFlagged: false,
          isMine: false,
        });
      }
      board.push(row);
    }
    for (let i = 0; i < 10; i += 1) {
      let row = this.getRand(9);
      let col = this.getRand(9);
      while (board[row][col].isMine === true) {
        row = this.getRand(9);
        col = this.getRand(9);
      }
      board[row][col].isMine = true;
    }

    this.state = {
      board: board,
    };
  }

  getTileValue(row, col) {
    let value = null;
    const board = this.state.board;
    surroundingTiles.forEach(tile => {
      if (board[row + tile[0]][col + tile[1]].isMine) {
        value = value + 1 || 1;
      }
    });

    return value;
  }

  handleClick(row, col, isRightClick = false) {
    if (isRightClick) {
      const newBoard = this.state.board.slice();
      newBoard[row][col].isFlagged = true;
      this.setState({
        board: newBoard,
      });
    }
    if (this.state.board[row][col].isFlagged === false) {
      if (this.state.board[row][col].isMine) {
        console.log('player lost');
      } else {
        console.log('reveal tokens & do things');
      }
    }
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
