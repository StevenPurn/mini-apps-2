import React from 'react';

const Tile = (props) => {
  const style = {
    height: '20px',
    border: 'solid',
    borderWidth: '1px',
  };

  const handleClick = () => {
    props.handleClick(props.location);
  };

  return (
    <div style={style} className='tile' onClick={() => handleClick()} />
  );
};

export default Tile;