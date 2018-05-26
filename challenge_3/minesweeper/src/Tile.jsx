import React from 'react';

const Tile = (props) => {
  const style = {
    height: '20px',
    border: 'solid',
    borderWidth: '1px',
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (event.type === 'click') {
      props.handleClick(props.location[0], props.location[1]);
    } else {
      props.handleClick(props.location[0], props.location[1], true);
    }
  };

  return (
    <div style={style} className='tile' onClick={e => handleClick(e)} onContextMenu={e => handleClick(e)}/>
  );
};

export default Tile;