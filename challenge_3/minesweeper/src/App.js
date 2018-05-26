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
    this.getTileValue = this.getTileValue.bind(this);
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      const row = [];
      for (let j = 0; j < 10; j += 1) {
        row.push({
          isRevealed: false,
          isFlagged: false,
          isMine: false,
          value: 0,
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

  getEmptySurroundingTiles(row, col) {
    let results = [];
    const board = this.state.board;
    surroundingTiles.forEach(tile => {
      const newRow = row + tile[0];
      const newCol = col + tile[1];
      if (!board[newRow][newCol].getTileValue && !tile.isMine) {
        results.push([newRow, newCol]);
      }
    });
    return results;
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
    const newBoard = this.state.board.slice();
    if (isRightClick) {
      newBoard[row][col].isFlagged = true;
      this.setState({
        board: newBoard,
      });
    }
    if (this.state.board[row][col].isFlagged === false) {
      if (this.state.board[row][col].isMine) {
        newBoard[row][col].isRevealed = true;
        console.log('player lost');
      } else {
        newBoard[row][col].value = this.getTileValue(row, col);
        newBoard[row][col].isRevealed = true;
        const tilesToReveal = this.getEmptySurroundingTiles(row, col);
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
