import React from 'react';
import Row from './Row';

const Board = (props) => {
  const board = [];
  for (let i = 0; i < props.size; i += 1) {
    board.push(i);
  }
  const rows = board.map(row => {
    return <Row size={props.size} rowNumber={row} handleClick={props.handleClick} /> 
  });
  return(
    <div>
      {rows}
    </div>
  )
}

export default Board;