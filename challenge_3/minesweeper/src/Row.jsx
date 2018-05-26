import React from 'react';
import Tile from './Tile';

const Row = (props) => {
  const style = {
    width: '20px',
    display: 'inline-block'
  }

  const tiles = [];
  for (let i = 0; i < props.size; i += 1) { 
    tiles.push([props.rowNumber, i]);
  }
  const components = tiles.map(tile => {
    return <Tile location={tile} handleClick={props.handleClick} />
  })

  return (
    <div style={style}>
      {components}
    </div>
  )
}

export default Row;